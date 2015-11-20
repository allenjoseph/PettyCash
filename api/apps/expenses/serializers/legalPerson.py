from rest_framework import serializers
from ..models.legalPerson import LegalPerson


class LegalPersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = LegalPerson
        fields = (
            'id',
            'name',
            'ruc',
            'dni',
        )
