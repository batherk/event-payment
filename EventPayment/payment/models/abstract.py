from django.db import models


class AbstractPassPayment(models.Model):

    price = models.IntegerField()
    paid_manually = models.BooleanField(default=False)

    buyer_name = models.CharField(max_length=80)
    buyer_phone = models.CharField(max_length=80)
    buyer_email = models.EmailField()

    def save(self, *args, **kwargs):
        if not self.pk:
            self.price = self.get_pass_type().price
        super(AbstractPassPayment, self).save(*args, **kwargs)

    def __str__(self):
        return f"Payment from {self.buyer_name} for {self.get_pass_type()}"

    def get_pass_type(self):
        raise NotImplementedError("Extending class must implement this method")

    def paid(self):
        return self.paid_manually
    paid.boolean = True

    @property
    def role(self):
        return self.get_pass_type().role

    @property
    def event(self):
        return self.get_pass_type().event
