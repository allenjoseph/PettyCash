from rest_framework import viewsets
from models import LegalPerson, Expense, Category
from models import Card, Installment
from serializers.legalPerson import LegalPersonSerializer
from serializers.category import CategorySerializer
from serializers.card import CardSerializer
from serializers.expense import ExpenseSerializer
from serializers.installment import InstallmentSerializer


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
