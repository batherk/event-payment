from django.urls import include, path
from rest_framework import routers

from event.views import EventViewSet

router = routers.DefaultRouter()
router.register(r"events", EventViewSet, basename="events")


urlpatterns = [
    path("", include(router.urls)),
]
