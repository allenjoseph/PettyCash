from rest_framework import viewsets
from models.card import Card
from models.installment import Installment
from serializers.card import CardSerializer
from serializers.installment import InstallmentSerializer
from datetime import datetime


class CardViewSet(viewsets.ModelViewSet):
    queryset = Card.objects.all()
    serializer_class = CardSerializer


class InstallmentViewSet(viewsets.ModelViewSet):
    queryset = Installment.objects.all()
    serializer_class = InstallmentSerializer

    def get_queryset(self):
        user = self.request.user
        date = self.request.GET['date']
        month = datetime.strptime(date, '%m-%Y')

        if user and month:
            installments = Installment.objects.filter(
                month=month,
                created_by=user
            )
            return installments

        return Installment.objects.none()
