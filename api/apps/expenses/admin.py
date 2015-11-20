from django.contrib import admin
from models.legalPerson import LegalPerson
from models.expense import Expense
from models.category import Category
from models.card import Card
from models.installment import Installment


@admin.register(LegalPerson)
class LegalPersonAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'name',
        'ruc',
        'dni',
        'created_by',
        'modified_by',
        'created_date',
        'last_modified',
    )


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'name',
    )


@admin.register(Expense)
class ExpenseAdmin(admin.ModelAdmin):
    list_display = (
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
        'created_by',
        'modified_by',
        'created_date',
        'last_modified',
    )


@admin.register(Card)
class CardAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'name',
        'start_amount',
        'close_day',
        'number',
        'rate',
        'rate_credit',
        'created_by',
        'modified_by',
        'created_date',
        'last_modified',
    )


@admin.register(Installment)
class InstallmentAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'expense',
        'month',
        'amount',
        'rate',
    )
