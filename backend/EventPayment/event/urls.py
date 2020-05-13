from django.urls import include, path
from rest_framework import routers

from event.views import EventViewSet, CourseViewSet

router = routers.DefaultRouter()
router.register(r"events", EventViewSet, basename="events")
router.register(r"classes", CourseViewSet, basename="classes")


urlpatterns = [
    path("", include(router.urls)),
]
