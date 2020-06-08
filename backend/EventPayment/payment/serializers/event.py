from rest_framework import serializers

from payment.models import EventPassPayment


class EventPassPaymentSerializer(serializers.ModelSerializer):
    token_id = serializers.CharField(write_only=True)

    class Meta:
        model = EventPassPayment
        fields = ('pass_type','buyer_name', 'buyer_email', 'buyer_phone', 'token_id')
        read_only_fields = ('price','paid_manually')