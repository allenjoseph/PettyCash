from rest_framework import viewsets
from models.legalPerson import LegalPerson
from models.expense import Expense
from models.category import Category
from models.card import Card
from models.installment import Installment
from serializers.legalPerson import LegalPersonSerializer
from serializers.category import CategorySerializer
from serializers.card import CardSerializer
from serializers.expense import ExpenseSerializer
from serializers.installment import InstallmentSerializer
from serializers.user import UserSerializer
from datetime import datetime


def jwt_response_payload_handler(token, user=None, request=None):
    cards = []
    if user:
        queryset = Card.objects.filter(created_by=user)
        cards = CardSerializer(queryset, many=True).data
    return {
        'token': token,
        'user': UserSerializer(user).data,
        'cards': cards
    }


class LegalPersonViewSet(viewsets.ModelViewSet):
    queryset = LegalPerson.objects.all()
    serializer_class = LegalPersonSerializer


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class ExpenseViewSet(viewsets.ModelViewSet):
    queryset = Expense.objects.all()
    serializer_class = ExpenseSerializer

    def get_queryset(self):
        user = self.request.user
        card = self.request.GET['card']

        if user and card:
            expenses = Expense.objects.filter(
                card__id=card,
                created_by=user
            )
            return expenses
            
        return Expense.objects.none()


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
