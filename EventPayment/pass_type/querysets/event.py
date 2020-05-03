from django.db import models

class EventPassQuerySet(models.QuerySet):
    def full(self):
        full = self
        for event in self:
            if event.remaining_spots()!=0:
                full = self.exclude(pk=event.pk)
        return full

    def not_full(self):
        not_full = self
        for event in self:
            if event.remaining_spots()==0:
                not_full = self.exclude(pk=event.pk)
        return not_full