from rest_framework import mixins, viewsets

from event.serializers import CourseSerializer
from event.models import Course

class CourseViewSet(
    mixins.ListModelMixin,
    mixins.RetrieveModelMixin,
    viewsets.GenericViewSet,
):
    serializer_class = CourseSerializer
    queryset = Course.objects.all()