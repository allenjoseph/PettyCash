from rest_framework import serializers
from ..models.installment import Installment


class InstallmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Installment
        fields = (
            'id',
            'expense',
            'month',
            'amount',
            'rate',
        )
