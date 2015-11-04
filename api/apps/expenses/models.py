from django.db import models


class LegalPerson(models.Model):
    id = models.AutoField(primary_key=True)
    ruc = models.IntegerField(blank=True, null=True)
    dni = models.IntegerField(blank=True, null=True)
    name = models.CharField(max_length=100)
    tags = models.CharField(max_length=100)


class Ticket(models.Model):
    id = models.AutoField(primary_key=True)
    description = models.CharField(max_length=300)
    date = models.DateTimeField(auto_now_add=True)
    totalPrice = models.FloatField()
    unitPrice = models.FloatField()
    amount = models.FloatField()
    number = models.CharField(max_length=100)
    legalPerson = models.ForeignKey(LegalPerson)
