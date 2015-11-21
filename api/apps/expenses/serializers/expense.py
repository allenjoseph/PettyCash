from rest_framework import serializers
from ..enums import RemindMe, Currency
from ..models.expense import Expense
from ..models.installment import Installment
from math import pow
from datetime import datetime
from dateutil.relativedelta import relativedelta


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
            'card',
            'installments',
            'created_date',
        )
        read_only_fields = (
            'created_date',
        )

    def calcAmount(self, expense, installments):
        tem = pow(1 + (expense.card.rate / 100), 1.0 / 12) - 1
        div = 1 - pow(1 + tem, -1 * installments)
        amount = tem * expense.total_price / div
        return amount

    def create(self, validated_data):
        if validated_data['repeat'] is None:
            validated_data['repeat'] = RemindMe.NEVER.value

        if validated_data['currency'] is None:
            validated_data['currency'] = Currency.PEN.value

        if validated_data['installments'] is None:
            validated_data['installments'] = 1

        expense = Expense.objects.create(**validated_data)

        installments = validated_data['installments']
        if installments > 1:
            amount = self.calcAmount(expense, installments)
            date = datetime(expense.date.year, expense.date.month, 1)

            while installments > 0:
                Installment.objects.create(
                    expense=expense,
                    month=date,
                    amount=amount,
                    rate=expense.card.rate
                )
                date = date + relativedelta(months=+1)
                installments -= 1
        else:
            Installment.objects.create(
                expense=expense,
                month=expense.date.month,
                amount=expense.total_price,
                rate=0
            )

        return expense
