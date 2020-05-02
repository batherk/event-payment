from django.db import models

from pass_type.models import EventPass
from .abstract import AbstractPassPayment


class EventPassPayment(AbstractPassPayment):

    pass_type = models.ForeignKey(EventPass, on_delete=models.CASCADE, related_name="event_payments")

    class Meta:
        verbose_name = "Event payment"
        verbose_name_plural = "Event payments"

    def __str__(self):
        return f"Payment from {self.buyer_name} for {self.pass_type}"

    def get_pass_type(self):
        return self.pass_type