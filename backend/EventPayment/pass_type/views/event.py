from rest_framework import mixins, viewsets

from pass_type.models import EventPass
from pass_type.serializers import EventPassSerializer

class EventPassViewSet(
    mixins.ListModelMixin,
    mixins.RetrieveModelMixin,
    viewsets.GenericViewSet,
):
    serializer_class = EventPassSerializer
    queryset = EventPass.objects.all()