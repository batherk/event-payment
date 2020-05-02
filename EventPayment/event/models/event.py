from django.db import models


class Event(models.Model):

    name = models.CharField(max_length=80)
    description = models.CharField(max_length=300)
    start_at = models.DateField()
    end_at = models.DateField()
    address = models.CharField(max_length=80)
