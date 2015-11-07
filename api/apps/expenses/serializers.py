from models import LegalPerson, Ticket
from rest_framework import serializers


class LegalPersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = LegalPerson
        fields = (
            'id',
            'ruc',
            'dni',
            'name',
            'tags',
            'administrator',
        )


class TicketSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ticket
        fields = (
            'id',
            'description',
            'date',
            'totalPrice',
            'unitPrice',
            'amount',
            'number',
            'legalPerson',
            'administrator',
        )
