from rest_framework import mixins, viewsets
from rest_framework.response import Response

from payment.serializers import EventPassPaymentSerializer
from payment.models import EventPassPayment

class EventPassPaymentViewSet(
    mixins.CreateModelMixin,
    viewsets.GenericViewSet):
    serializer_class = EventPassPaymentSerializer
    queryset = EventPassPayment.objects.all()


    def create(self, request):
        serializer = EventPassPaymentSerializer(data=request.data, context={"request": request})
        serializer.is_valid(raise_exception=True)
        EventPassPayment.create(serializer.validated_data)
        return Response({'detail':'Payment complete'})

