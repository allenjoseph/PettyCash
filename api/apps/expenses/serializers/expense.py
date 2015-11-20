from rest_framework import serializers
from ..enums import RemindMe, Currency
from ..models import Expense


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
