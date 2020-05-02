from django.db import models
from event.models.abstract_event import AbstractEvent
from enumchoicefield import EnumChoiceField
from EventPayment.enums import Day

class Class(AbstractEvent):

    week_start = models.IntegerField()
    week_end = models.IntegerField()
    day = EnumChoiceField(enum_class=Day)
    time_start = models.TimeField()
    time_end = models.TimeField()


    

