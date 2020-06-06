from rest_framework import mixins, viewsets

from event.serializers import CourseSerializer, CourseWithPassesSerializer
from event.models import Course

class CourseViewSet(
    mixins.ListModelMixin,
    mixins.RetrieveModelMixin,
    viewsets.GenericViewSet,
):
    serializer_class = CourseWithPassesSerializer
    queryset = Course.objects.all()

    def get_serializer_class(self):
        if self.action == 'retrieve':
            return CourseWithPassesSerializer
        return CourseSerializer