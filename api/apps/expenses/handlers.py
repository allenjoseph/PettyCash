from models.card import Card
from serializers.card import CardSerializer
from serializers.user import UserSerializer


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