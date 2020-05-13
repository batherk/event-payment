from rest_framework import mixins, viewsets

from payment.serializers import EventPassPaymentSerializer
from payment.models import EventPassPayment

class EventPassPaymentViewSet(
    mixins.CreateModelMixin,
    viewsets.GenericViewSet,
):
    serializer_class = EventPassPaymentSerializer
    queryset = EventPassPayment.objects.all()