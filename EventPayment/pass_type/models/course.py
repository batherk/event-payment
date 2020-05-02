from django.db import models

from .abstract import AbstractPass
from event.models import Course

class CoursePass(AbstractPass):

    event = models.ForeignKey(Course, on_delete=models.CASCADE)

    class Meta:
        verbose_name = "Course pass"
        verbose_name_plural = "Course passes"