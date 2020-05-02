from django.db import models

from .abstract import AbstractPass
from event.models import Event

class EventPass(AbstractPass):

    event = models.ForeignKey(Event, on_delete=models.CASCADE)

    class Meta:
        verbose_name = "Event pass"
        verbose_name_plural = "Event passes"