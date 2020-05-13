from rest_framework import mixins, viewsets

from payment.serializers import CoursePassPaymentSerializer
from payment.models import CoursePassPayment

class CoursePassPaymentViewSet(mixins.CreateModelMixin,
    viewsets.GenericViewSet,
):
    serializer_class = CoursePassPaymentSerializer
    queryset = CoursePassPayment.objects.all()