from rest_framework import viewsets
from models.legalPerson import LegalPerson
from models.expense import Expense
from models.category import Category
from serializers.legalPerson import LegalPersonSerializer
from serializers.category import CategorySerializer
from serializers.expense import ExpenseSerializer


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