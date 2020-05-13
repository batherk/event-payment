from rest_framework import serializers

from payment.models import CoursePassPayment


class CoursePassPaymentSerializer(serializers.ModelSerializer):

    class Meta:
        model = CoursePassPayment
        fields = ('__all__')