from django.db import models
from event.models.abstract import AbstractEvent

class Event(AbstractEvent):

    date_start = models.DateField()
    date_end = models.DateField()

    def __str__(self):
        return f"{self.name} - from {self.date_start} to {self.date_end}"



