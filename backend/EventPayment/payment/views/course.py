from rest_framework import mixins, viewsets, serializers
from rest_framework.response import Response
import stripe

from payment.serializers import CoursePassPaymentSerializer
from payment.models import CoursePassPayment

class CoursePassPaymentViewSet(mixins.CreateModelMixin,
    viewsets.GenericViewSet,):
    serializer_class = CoursePassPaymentSerializer
    queryset = CoursePassPayment.objects.all()


    def create(self, request):
        serializer = CoursePassPaymentSerializer(data=request.data, context={"request": request})
        try: 
            serializer.is_valid(raise_exception=True)
            CoursePassPayment.create(serializer.validated_data)
            return Response({'detail':'Payment complete'})
        except serializers.ValidationError:
            return Response({'detail':'Payment was aborted because of invalid personal data'}, 400)
        except stripe.error.StripeError as error:
            print(error)
            return Response({'detail':'Payment was aborted because of an error with the payment provider'}, 400)


