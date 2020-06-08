from rest_framework import mixins, viewsets
from rest_framework.response import Response

from payment.serializers import CoursePassPaymentSerializer
from payment.models import CoursePassPayment

class CoursePassPaymentViewSet(mixins.CreateModelMixin,
    viewsets.GenericViewSet,):
    serializer_class = CoursePassPaymentSerializer
    queryset = CoursePassPayment.objects.all()


    def create(self, request):
        serializer = CoursePassPaymentSerializer(data=request.data, context={"request": request})
        if serializer.is_valid():
            CoursePassPayment.create(serializer.validated_data)
            return Response({'detail':'Payment complete'})
        return Response({'detail':'Payment was aborted because of invalid personal data', 'errors':serializer.errors}, 400)


