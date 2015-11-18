from django.db import models
from django.contrib.auth.models import User
from enums import RemindMe


class LegalPerson(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    ruc = models.CharField(max_length=100, blank=True)
    dni = models.CharField(max_length=100, blank=True)
    created_by = models.ForeignKey(User, related_name="legal_person_created")
    modified_by = models.ForeignKey(User, related_name="legal_person_modified")
    created_date = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name


class Category(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Expense(models.Model):
    id = models.AutoField(primary_key=True)
    date = models.DateTimeField()
    description = models.CharField(max_length=300)
    total_price = models.FloatField()
    category = models.ForeignKey(Category, null=True, blank=True)
    
    number = models.CharField(max_length=100, blank=True)
    legal_person = models.ForeignKey(LegalPerson, null=True, blank=True)
    repeat = models.IntegerField(default=RemindMe.NEVER.value, blank=True)
    
    created_by = models.ForeignKey(User, related_name="ticket_created")
    modified_by = models.ForeignKey(User, related_name="ticket_modified")
    created_date = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.description


class Card(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    
    start_amount = models.FloatField(default=0, blank=True)
    close_day = models.IntegerField(null=True, blank=True)
    
    number = models.CharField(max_length=100, blank=True)
    rate = models.FloatField(null=True, blank=True)
    rate_credit = models.FloatField(null=True, blank=True)
    
    
class Installment(models.Model):
    id = models.AutoField(primary_key=True)
    expense = models.ForeignKey(Expense)
    card = models.ForeignKey(Card)
    month = models.IntegerField()
    amount = models.FloatField()
    rate = models.FloatField()
    