from models import Administrator, LegalPerson, Ticket
from rest_framework import serializers


class AdministratorSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Administrator
        fields = (
            'id',
            'name',
            'dni',
            'password',
            'email',
        )


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
            'administrator',
        )
