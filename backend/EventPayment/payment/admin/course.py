from django.contrib import admin
from payment.models import CoursePassPayment

from .filters import PaymentRoleFilter, CoursePaymentTimeFilter


@admin.register(CoursePassPayment)
class CoursePassPaymentAdmin(admin.ModelAdmin):
    fields = ("pass_type", "price","paid_online", "buyer_name","buyer_phone","buyer_email")
    list_display = ("buyer_email", "buyer_name", "event", "role", "paid_online",)
    list_filter = (CoursePaymentTimeFilter, PaymentRoleFilter,)
    raw_id_fields = ("pass_type",)
    readonly_fields = ("price",'paid_online')