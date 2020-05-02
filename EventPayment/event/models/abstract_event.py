from django.db import models

class AbstractEvent(models.Model):

    name = models.CharField(max_length=80)
    description = models.CharField(max_length=300)
    address = models.CharField(max_length=80)
    max_amount = models.IntegerField()
    

    class Meta:
        abstract = True