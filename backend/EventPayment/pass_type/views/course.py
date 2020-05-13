from rest_framework import mixins, viewsets

from pass_type.models import CoursePass
from pass_type.serializers import CoursePassSerializer

class CoursePassViewSet(
    mixins.ListModelMixin,
    mixins.RetrieveModelMixin,
    viewsets.GenericViewSet,
):
    serializer_class = CoursePassSerializer
    queryset = CoursePass.objects.all()