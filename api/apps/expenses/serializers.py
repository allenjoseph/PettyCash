from models import LegalPerson, Expense, Category
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


class ExpenseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Expense
        fields = (
            'id',
            'date',
            'description',
            'total_price',
            'category',
            'number',
            'legal_person',
            'repeat',
            'created_date',
        )
        read_only_fields = (
            'created_date',
        )
