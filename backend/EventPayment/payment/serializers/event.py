from rest_framework import serializers

from payment.models import EventPassPayment


class EventPassPaymentSerializer(serializers.ModelSerializer):

    class Meta:
        model = EventPassPayment
        fields = ('__all__')