from django.contrib import admin
from payment.models import CoursePassPayment

from .filters import PaymentRoleFilter, CoursePaymentTimeFilter


@admin.register(CoursePassPayment)
class CoursePassPaymentAdmin(admin.ModelAdmin):
    fields = ("pass_type", "price","paid_manually", "paid","buyer_name","buyer_phone","buyer_email")
    list_display = ("buyer_email", "buyer_name", "event", "role", "paid",)
    list_filter = (PaymentRoleFilter, CoursePaymentTimeFilter)
    raw_id_fields = ("pass_type",)
    readonly_fields = ("price", "paid")