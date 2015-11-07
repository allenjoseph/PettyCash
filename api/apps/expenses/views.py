from models import LegalPerson, Ticket
from rest_framework import viewsets
from serializers import LegalPersonSerializer
from serializers import TicketSerializer


class LegalPersonViewSet(viewsets.ModelViewSet):
    queryset = LegalPerson.objects.all()
    serializer_class = LegalPersonSerializer


class TicketViewSet(viewsets.ModelViewSet):
    queryset = Ticket.objects.all()
    serializer_class = TicketSerializer
