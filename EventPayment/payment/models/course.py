from django.db import models

from pass_type.models import CoursePass
from .abstract import AbstractPassPayment


class CoursePassPayment(AbstractPassPayment):

    pass_type = models.ForeignKey(CoursePass, on_delete=models.CASCADE, related_name="course_payments")


    class Meta:
        verbose_name = "Course payment"
        verbose_name_plural = "Course payments"

    def __str__(self):
        return f"Payment from {self.buyer_name} for {self.pass_type}"

    def get_pass_type(self):
        return self.pass_type