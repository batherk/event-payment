from django.db import models

from .abstract import AbstractPass
from event.models import Course

class CoursePass(AbstractPass):

    event = models.ForeignKey(Course, on_delete=models.CASCADE, related_name="passes")

    class Meta:
        verbose_name = "Course pass"
        verbose_name_plural = "Course passes"

    def __str__(self):
        return f"{self.role}-pass to {self.event}"


    def get_event(self):
        return self.event