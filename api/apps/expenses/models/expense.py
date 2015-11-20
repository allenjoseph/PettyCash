from django.db import models
from django.contrib.auth.models import User
from ..enums import RemindMe, Currency
from category import Category
from legalPerson import LegalPerson
from card import Card


class Expense(models.Model):
    id = models.AutoField(primary_key=True)
    date = models.DateTimeField()
    description = models.CharField(max_length=300)
    total_price = models.FloatField()
    category = models.ForeignKey(Category, null=True, blank=True)

    number = models.CharField(max_length=100, blank=True)
    legal_person = models.ForeignKey(LegalPerson, null=True, blank=True)
    repeat = models.IntegerField(
        default=RemindMe.NEVER.value,
        choices=RemindMe.choices(), null=True, blank=True)
    currency = models.IntegerField(
        default=Currency.PEN.value,
        choices=Currency.choices(), null=True, blank=True)
    exchange = models.FloatField(null=True, blank=True)
    card = models.ForeignKey(Card)
    installments = models.IntegerField(default=1, null=True, blank=True)

    created_by = models.ForeignKey(User, related_name="expense_created")
    modified_by = models.ForeignKey(User, related_name="expense_modified")
    created_date = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.description
