from rest_framework import serializers

from pass_type.models import CoursePass


class CoursePassSerializer(serializers.ModelSerializer):

    class Meta:
        model = CoursePass
        fields = ('__all__')