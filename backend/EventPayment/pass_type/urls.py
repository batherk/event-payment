from django.urls import include, path
from rest_framework import routers

from pass_type.views import EventPassViewSet, CoursePassViewSet

router = routers.DefaultRouter()
router.register(r"eventpasses", EventPassViewSet, basename="eventpasses")
router.register(r"coursepasses", CoursePassViewSet, basename="coursepasses")


urlpatterns = [
    path("", include(router.urls)),
]