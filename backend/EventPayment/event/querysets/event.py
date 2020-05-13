from django.db import models
from datetime import date

class EventQuerySet(models.QuerySet):
    def past(self):
        return self.filter(date_end__lt=date.today())

    def present(self):
        return self.filter(date_start__lte=date.today()).filter(date_end__gte=date.today())

    def future(self):
        return self.filter(date_start__gt=date.today())