from django.db import models
from enumchoicefield import EnumChoiceField

from EventPayment.enums import Role

class AbstractPass(models.Model):

    name = models.CharField(max_length=80)
    description = models.CharField(max_length=300, null=True)
    price = models.IntegerField()
    role = EnumChoiceField(enum_class=Role)

    class Meta:
        abstract = True

