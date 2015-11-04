from models import LegalPerson, Ticket
from rest_framework import serializers


class LegalPersonSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = LegalPerson
        fields = (
            'id',
            'ruc',
            'dni',
            'name',
            'tags',
        )


class TicketSerializer(serializers.HyperlinkedModelSerializer):
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
        )
