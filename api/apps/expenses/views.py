from models import Administrator, LegalPerson, Ticket
from rest_framework import viewsets
from serializers import AdministratorSerializer
from serializers import LegalPersonSerializer
from serializers import TicketSerializer


class AdministratorViewSet(viewsets.ModelViewSet):
    queryset = Administrator.objects.all()
    serializer_class = AdministratorSerializer


class LegalPersonViewSet(viewsets.ModelViewSet):
    queryset = LegalPerson.objects.all()
    serializer_class = LegalPersonSerializer


class TicketViewSet(viewsets.ModelViewSet):
    queryset = Ticket.objects.all()
    serializer_class = TicketSerializer
