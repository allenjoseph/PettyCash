from rest_framework import serializers
from ..models.card import Card


class CardSerializer(serializers.ModelSerializer):
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

        return Card.objects.create(**validated_data)
