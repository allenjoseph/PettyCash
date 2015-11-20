from rest_framework import serializers
from ..models import Installment


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
