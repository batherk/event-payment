from django.db import models
from event.models.abstract import AbstractEvent
from event.querysets.event import EventQuerySet

class Event(AbstractEvent):

    date_start = models.DateField()
    date_end = models.DateField()

    objects = EventQuerySet.as_manager()

    def __str__(self):
        return f"{self.name} - from {self.date_start} to {self.date_end}"



