from django.db import models
from expense import Expense


class Installment(models.Model):
    id = models.AutoField(primary_key=True)
    expense = models.ForeignKey(Expense)
    month = models.DateTimeField()
    amount = models.FloatField()
    rate = models.FloatField()
