from django.db import models
from django.contrib.auth.hashers import make_password


class Administrator(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    dni = models.IntegerField(blank=True, null=True)
    password = models.CharField(max_length=50)
    email = models.EmailField(max_length=100)

    def save(self, *args, **kwargs):
        self.password = make_password(self.password)
        super(Administrator, self).save(*args, **kwargs)

    def __str__(self):
        return self.name


class LegalPerson(models.Model):
    id = models.AutoField(primary_key=True)
    ruc = models.IntegerField(blank=True, null=True)
    dni = models.IntegerField(blank=True, null=True)
    name = models.CharField(max_length=100)
    tags = models.CharField(max_length=100)
    administrator = models.ForeignKey(Administrator)

    def __str__(self):
        return self.name


class Ticket(models.Model):
    id = models.AutoField(primary_key=True)
    description = models.CharField(max_length=300)
    date = models.DateTimeField(auto_now_add=True)
    totalPrice = models.FloatField()
    unitPrice = models.FloatField()
    amount = models.FloatField()
    number = models.CharField(max_length=100)
    legalPerson = models.ForeignKey(LegalPerson)
    administrator = models.ForeignKey(Administrator)

    def __str__(self):
        return self.description
