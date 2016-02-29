"""PettyCash URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.8/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Add an import:  from blog import urls as blog_urls
    2. Add a URL to urlpatterns:  url(r'^blog/', include(blog_urls))
"""
from django.conf.urls import include, url
from django.contrib import admin
from rest_framework import routers
from apps.expenses.views.expense import LegalPersonViewSet
from apps.expenses.views.expense import ExpenseViewSet
from apps.expenses.views.expense import CategoryViewSet
from apps.expenses.views.installment import CardViewSet
from apps.expenses.views.installment import InstallmentViewSet
from django.views.generic import TemplateView

router = routers.SimpleRouter()
router.register(r'legalpersons', LegalPersonViewSet)
router.register(r'expenses', ExpenseViewSet)
router.register(r'categories', CategoryViewSet)
router.register(r'cards', CardViewSet)
router.register(r'installments', InstallmentViewSet)

urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url(r'^api/api-token-auth/', 'rest_framework_jwt.views.obtain_jwt_token'),
    url(r'^api/api-token-verify/', 'rest_framework_jwt.views.verify_jwt_token'),
    url(r'^api/', include(router.urls)),
    url(r'^$', TemplateView.as_view(template_name='index.html')),
]
