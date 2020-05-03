from django.db import models

from .abstract import AbstractPass
from event.models import Event

class EventPass(AbstractPass):

    name = models.CharField(max_length=80)
    description = models.CharField(max_length=300, null=True)
    event = models.ForeignKey(Event, on_delete=models.CASCADE)

    class Meta:
        verbose_name = "Event pass"
        verbose_name_plural = "Event passes"

    def __str__(self):
        return f"{self.name} to {self.event}"

    def get_event(self):
        return self.event