from django.db import models

from pass_type.models import EventPass
from .abstract import AbstractPassPayment


class EventPassPayment(AbstractPassPayment):

    pass_type = models.ForeignKey(EventPass, on_delete=models.CASCADE, related_name="event_payments")

    class Meta:
        verbose_name = "Event payment"
        verbose_name_plural = "Event payments"

    def get_pass_type(self):
        return self.pass_type

    @classmethod
    def create(cls, data):
        token_id = data.pop('token_id')
        price = EventPass.objects.get(id=data['pass_type'].id).price
        description = "Test"

        cls.pay_online(token_id=token_id,price=price,description=description)

        data['paid_online'] = True
        payment = EventPassPayment(**data)
        payment.save()