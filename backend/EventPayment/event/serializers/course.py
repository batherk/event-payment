from rest_framework import serializers

from event.models import Course
from pass_type.serializers import CoursePassSerializer


class CourseSerializer(serializers.ModelSerializer):

    class Meta:
        model = Course
        fields = ('__all__')


class CourseWithPassesSerializer(CourseSerializer):
    passes = CoursePassSerializer(many=True)
