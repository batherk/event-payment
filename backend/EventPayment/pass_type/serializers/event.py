from rest_framework import serializers

from pass_type.models import EventPass


class EventPassSerializer(serializers.ModelSerializer):

    class Meta:
        model = EventPass
        fields = ('__all__')