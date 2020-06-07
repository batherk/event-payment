from django.db import models

class AbstractEvent(models.Model):

    name = models.CharField(max_length=80)
    description = models.CharField(max_length=300)
    address = models.CharField(max_length=80, default="https://goo.gl/maps/NdrHbAVgVRkX6STg7")
    

    class Meta:
        abstract = True


    def passes_left(self):
        return self.passes.passes_left()