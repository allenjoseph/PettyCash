from django.contrib import admin
from models import LegalPerson, Ticket


@admin.register(LegalPerson)
class LegalPersonAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'ruc',
        'dni',
        'name',
        'tags',
    )


@admin.register(Ticket)
class TicketAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'description',
        'date',
        'totalPrice',
        'unitPrice',
        'amount',
        'number',
        'legalPerson',
        'administrator',
    )
