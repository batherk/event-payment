from rest_framework import serializers

from event.models import Course
from pass_type.models import CoursePass
from pass_type.serializers import CoursePassSerializer


class CourseSerializer(serializers.ModelSerializer):

    time_start = serializers.TimeField(format='%H:%M')
    time_end = serializers.TimeField(format='%H:%M')

    class Meta:
        model = Course
        fields = ('__all__')


class CourseWithPassesSerializer(CourseSerializer):
    passes_left = CoursePassSerializer(many=True)
