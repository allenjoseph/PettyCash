from django.db import models
from django.contrib.auth.models import User


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
