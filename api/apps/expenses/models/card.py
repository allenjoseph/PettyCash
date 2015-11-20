from django.db import models
from django.contrib.auth.models import User


class Card(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)

    start_amount = models.FloatField(default=0, null=True, blank=True)
    close_day = models.IntegerField(null=True, blank=True)

    number = models.CharField(max_length=100, blank=True)
    rate = models.FloatField(null=True, blank=True)
    rate_credit = models.FloatField(null=True, blank=True)

    created_by = models.ForeignKey(User, related_name="card_created")
    modified_by = models.ForeignKey(User, related_name="card_modified")
    created_date = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True)
