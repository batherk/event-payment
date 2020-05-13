from django.db import models
from datetime import date, time
from event.models.abstract import AbstractEvent
from enumchoicefield import EnumChoiceField
from EventPayment.enums import Day
from event.querysets.course import CourseQuerySet

def this_year():
    return date.today().year

class Course(AbstractEvent):

    week_start = models.IntegerField()
    week_end = models.IntegerField()
    day = EnumChoiceField(enum_class=Day)
    year = models.IntegerField(default=this_year)
    time_start = models.TimeField()
    time_end = models.TimeField()

    objects = CourseQuerySet.as_manager()

    def __str__(self):
        return f"{self.name} - {self.time_start} from week {self.week_start} to {self.week_end}"




    

