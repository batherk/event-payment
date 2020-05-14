from rest_framework import serializers

from payment.models import CoursePassPayment


class CoursePassPaymentSerializer(serializers.ModelSerializer):

    class Meta:
        model = CoursePassPayment
        fields = ('pass_type','buyer_name', 'buyer_email', 'buyer_phone')
        read_only_fields = ('price','paid_manually')