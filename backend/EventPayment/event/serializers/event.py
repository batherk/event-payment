from rest_framework import serializers

from event.models import Event
from pass_type.serializers import EventPassSerializer


class EventSerializer(serializers.ModelSerializer):

    class Meta:
        model = Event
        fields = ('__all__')

class EventWithPassesSerializer(EventSerializer):
    passes_left = EventPassSerializer(many=True)
