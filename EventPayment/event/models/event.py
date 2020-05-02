from django.db import models
from event.models.abstract_event import AbstractEvent

class Event(AbstractEvent):

    date_start = models.DateField()
    date_end = models.DateField()



