from rest_framework import serializers
from models import LegalPerson, Expense, Category
from models import Card, Installment
from enums import RemindMe, Currency


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
            'currency',
            'exchange',
            'created_date',
        )
        read_only_fields = (
            'created_date',
        )

    def create(self, validated_data):
        if validated_data['repeat'] is None:
            validated_data['repeat'] = RemindMe.NEVER.value

        if validated_data['currency'] is None:
            validated_data['currency'] = Currency.PEN.value

        return Expense.objects.create(**validated_data)


class CardSerializer(serializers.ModelSerializer):
    start_amount = serializers.FloatField(default=0)

    class Meta:
        model = Card
        fields = (
            'id',
            'name',
            'start_amount',
            'close_day',
            'number',
            'rate',
            'rate_credit',
        )

    def create(self, validated_data):
        if validated_data['start_amount'] is None:
            validated_data['start_amount'] = 0

        return Expense.objects.create(**validated_data)


class InstallmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Installment
        fields = (
            'id',
            'expense',
            'card',
            'month',
            'amount',
            'rate',
        )
