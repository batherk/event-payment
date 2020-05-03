from django.db import models
from enumchoicefield import EnumChoiceField

from EventPayment.enums import Role

class AbstractPass(models.Model):

    price = models.IntegerField()
    role = EnumChoiceField(enum_class=Role)
    total_spots = models.IntegerField()

    class Meta:
        abstract = True

    def get_event(self):
        raise NotImplementedError("Extending class must override this method")

    def get_payments(self):
        payments_related_name = f"{self.get_event()._meta.model_name}_payments"
        return getattr(self,payments_related_name)


    def remaining_spots(self):
        return self.total_spots - len(self.get_payments().filter(paid=True))

