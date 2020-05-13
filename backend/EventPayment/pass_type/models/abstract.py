from django.db import models
from enumchoicefield import EnumChoiceField

from pass_type.querysets.passes import PassQuerySet
from EventPayment.enums import Role

class AbstractPass(models.Model):

    price = models.IntegerField()
    role = EnumChoiceField(enum_class=Role)
    total_spots = models.IntegerField()

    objects = PassQuerySet.as_manager()

    class Meta:
        abstract = True

    def get_event(self):
        raise NotImplementedError("Extending class must override this method")

    def get_payments(self):
        payments_related_name = f"{self.get_event()._meta.model_name}_payments"
        return getattr(self,payments_related_name)

    def remaining_spots(self):
        return self.total_spots - self.get_payments().count()

    def sold_out(self):
        return self.remaining_spots() == 0

    sold_out.boolean = True

