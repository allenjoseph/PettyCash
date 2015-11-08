from models import LegalPerson, Ticket
from rest_framework import serializers


class LegalPersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = LegalPerson
        fields = (
            'id',
            'name',
            'ruc',
            'dni',
            'tags',
        )


class TicketSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ticket
        fields = (
            'id',
            'number',
            'description',
            'legal_person',
            'total_price',
            'created_by',
            'created_date',
        )
