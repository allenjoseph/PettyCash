from django.db import models
from audit_log.models.fields import CreatingUserField
from audit_log.models.fields import LastUserField


class LegalPerson(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    ruc = models.IntegerField(blank=True, null=True)
    dni = models.IntegerField(blank=True, null=True)
    tags = models.CharField(max_length=100, blank=True)
    created_by = CreatingUserField(related_name="legal_person_created")
    modified_by = LastUserField(related_name="legal_person_modified")
    last_modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name


class Ticket(models.Model):
    id = models.AutoField(primary_key=True)
    number = models.CharField(max_length=100)
    description = models.CharField(max_length=300)
    legal_person = models.ForeignKey(LegalPerson)
    total_price = models.FloatField()
    created_by = CreatingUserField(related_name="ticket_created")
    modified_by = LastUserField(related_name="ticket_modified")
    created_date = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.description
