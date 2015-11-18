from django.contrib import admin
from models import LegalPerson, Expense, Category
from models import Card, Installment


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
    )
    
    
@admin.register(Installment)
class InstallmentAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'expense',
        'card',
        'month',
        'amount',
        'rate',
    )