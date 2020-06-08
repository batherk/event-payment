from django.db import models

from pass_type.models import CoursePass
from .abstract import AbstractPassPayment


class CoursePassPayment(AbstractPassPayment):

    pass_type = models.ForeignKey(CoursePass, on_delete=models.CASCADE, related_name="course_payments")


    class Meta:
        verbose_name = "Course payment"
        verbose_name_plural = "Course payments"

    def get_pass_type(self):
        return self.pass_type

    @classmethod
    def create(cls, data):
        cls.pay_online(**data)

        data['paid_online'] = True
        data.pop('token_id')
        payment = CoursePassPayment(**data)
        payment.save()


