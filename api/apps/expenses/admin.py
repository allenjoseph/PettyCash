from django.contrib import admin
from models import LegalPerson, Ticket


@admin.register(LegalPerson)
class LegalPersonAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'name',
        'ruc',
        'dni',
        'tags',
        'created_by',
        'modified_by',
        'last_modified',
    )


@admin.register(Ticket)
class TicketAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'number',
        'description',
        'legal_person',
        'total_price',
        'created_by',
        'modified_by',
        'created_date',
        'last_modified',
    )
