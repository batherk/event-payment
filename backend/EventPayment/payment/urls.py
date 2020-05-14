from django.urls import include, path
from rest_framework import routers

from payment.views import EventPassPaymentViewSet, CoursePassPaymentViewSet

router = routers.DefaultRouter()
router.register(r"eventpayments", EventPassPaymentViewSet, basename="eventpayments")
router.register(r"coursepayments", CoursePassPaymentViewSet, basename="coursepayments")


urlpatterns = [
    path("", include(router.urls)),
]
