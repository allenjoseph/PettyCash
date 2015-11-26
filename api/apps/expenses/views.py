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


def jwt_response_payload_handler(token, user=None, request=None):
    carsSerializer = []
    if user:
        cars = Card.objects.filter(created_by=user).order_by('name')
        carsSerializer = CardSerializer(cars).data
    return {
        'token': token,
        'user': UserSerializer(user).data,
        'cards': carsSerializer
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


class CardViewSet(viewsets.ModelViewSet):
    queryset = Card.objects.all()
    serializer_class = CardSerializer


class InstallmentViewSet(viewsets.ModelViewSet):
    queryset = Installment.objects.all()
    serializer_class = InstallmentSerializer
