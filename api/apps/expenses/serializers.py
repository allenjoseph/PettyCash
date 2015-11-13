from models import LegalPerson, Ticket, Category
from rest_framework import serializers


class LegalPersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = LegalPerson
        fields = (
            'id',
            'name',
            'ruc',
            'dni',
        )


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = (
            'id',
            'name',
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
            'category',
            'created_date'
        )
        read_only_fields = (
            'created_date',
        )
