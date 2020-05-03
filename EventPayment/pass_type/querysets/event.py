from django.db import models

class EventPassQuerySet(models.QuerySet):
    def full(self):
        full = self
        for event in self:
            if event.remaining_spots()!=0:
                full = self.exclude(pk=event.pk)
        return full

    def not_full(self):
        return self.difference(self.full())