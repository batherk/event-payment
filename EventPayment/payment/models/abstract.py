from django.db import models


class AbstractPassPayment(models.Model):

    price = models.IntegerField()
    paid = models.BooleanField(default=False)

    buyer_name = models.CharField(max_length=80)
    buyer_phone = models.CharField(max_length=80)
    buyer_email = models.EmailField()

    def save(self, *args, **kwargs):
        if not self.pk:
            self.price = self.get_pass_type().price
        super(AbstractPassPayment, self).save(*args, **kwargs)

    def get_pass_type(self):
        raise NotImplementedError("Extending class must implement this method")
