from rest_framework import mixins, viewsets

from event.serializers import EventSerializer
from event.models import Event

class EventViewSet(
    mixins.ListModelMixin,
    mixins.RetrieveModelMixin,
    viewsets.GenericViewSet,
):
    serializer_class = EventSerializer
    queryset = Event.objects.all()