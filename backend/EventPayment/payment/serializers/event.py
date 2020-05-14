from rest_framework import serializers

from payment.models import EventPassPayment


class EventPassPaymentSerializer(serializers.ModelSerializer):

    class Meta:
        model = EventPassPayment
        fields = ('pass_type','buyer_name', 'buyer_email', 'buyer_phone')
        read_only_fields = ('price','paid_manually')