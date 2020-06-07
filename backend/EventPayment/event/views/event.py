from rest_framework import mixins, viewsets

from event.serializers import EventSerializer, EventWithPassesSerializer
from event.models import Event

class EventViewSet(
    mixins.ListModelMixin,
    mixins.RetrieveModelMixin,
    viewsets.GenericViewSet,
):
    queryset = Event.objects.all()


    def get_serializer_class(self):
        if self.action == 'retrieve':
            return EventWithPassesSerializer
        return EventSerializer