import os
from django.db import models
from django.core.exceptions import ValidationError
import stripe

STRIPE_SECRET_KEY = os.environ.get("STRIPE_SK")


class AbstractPassPayment(models.Model):

    price = models.IntegerField()
    paid_online = models.BooleanField(default=False)

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

    @classmethod
    def pay_online(cls, token_id, price, description):
        
        # Stripe handles money in eurocents in stead of euros, therefore you have to multiply the price with 100
        price_in_euro_cents = price * 100

        charge = stripe.Charge.create(api_key=STRIPE_SECRET_KEY, amount=price_in_euro_cents,
                currency='eur',
                description=description,
                source=token_id)

    @property
    def role(self):
        return self.get_pass_type().role

    @property
    def event(self):
        return self.get_pass_type().event

    def clean(self):
        if self.get_pass_type().sold_out():
            raise ValidationError(f"You cannot pay for this item. There are no {self.get_pass_type()} left.")

