"""
Add user created_by and modified_by foreign key
refs to any model automatically.

Almost entirely taken from
https://github.com/Atomidata/django-audit-log/blob/master/audit_log/middleware.py
"""

from django.db.models import signals
from django.utils.functional import curry
from rest_framework.request import Request
from rest_framework.exceptions import AuthenticationFailed
from django.utils.functional import SimpleLazyObject
from django.contrib.auth.middleware import get_user
from rest_framework_jwt.authentication import JSONWebTokenAuthentication


class WhodidMiddleware(object):
    def process_request(self, request):
        if request.method not in ('GET', 'HEAD', 'OPTIONS', 'TRACE'):
            if hasattr(request, 'user') and request.user.is_authenticated():
                user = request.user
            else:
                user = None

            mark_whodid = curry(self.mark_whodid, user)
            signals.pre_save.connect(
                mark_whodid,
                dispatch_uid=(self.__class__, request,),
                weak=False)

    def process_response(self, request, response):
        signals.pre_save.disconnect(dispatch_uid=(self.__class__, request,))
        return response

    def mark_whodid(self, user, sender, instance, **kwargs):
        if not getattr(instance, 'created_by_id', None):
            instance.created_by = user
        if hasattr(instance, 'modified_by_id'):
            instance.modified_by = user


class JWTAuthMiddleware(object):
    """
    Convenience middleware for users of django-rest-framework-jwt.
    Fixes issue https://github.com/GetBlimp/django-rest-framework-jwt/issues/45
    """

    def get_user_jwt(self, request):
        user = get_user(request)
        if user.is_authenticated():
            return user
        try:
            user_jwt = JSONWebTokenAuthentication().authenticate(Request(request))
            if user_jwt is not None:
                return user_jwt[0]
        except AuthenticationFailed:
            pass
        return user

    def process_request(self, request):
        assert hasattr(request, 'session'),\
        """The Django authentication middleware requires session middleware to be installed.
         Edit your MIDDLEWARE_CLASSES setting to insert 'django.contrib.sessions.middleware.SessionMiddleware'."""

        request.user = SimpleLazyObject(lambda: self.get_user_jwt(request))