from django.db import models
from django.core.exceptions import ValidationError
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

    def sold_spots(self):
        return self.get_payments().count()

    def remaining_spots(self):
        return self.total_spots - self.sold_spots()

    def sold_out(self):
        return self.remaining_spots() <= 0

    def clean(self):
        if self.total_spots < self.get_payments().count():
            raise ValidationError(f"There cannot be less total spots than people who have already paid for it. Minimum total spots should be {self.get_payments().count()}.")

    sold_out.boolean = True

