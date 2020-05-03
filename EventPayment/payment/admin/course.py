from django.contrib import admin
from payment.models import CoursePassPayment

from .filters.role import PaymentRoleFilter


@admin.register(CoursePassPayment)
class CoursePassPaymentAdmin(admin.ModelAdmin):
    fields = ("pass_type", "price","paid","buyer_name","buyer_phone","buyer_email")
    list_display = ("buyer_email", "buyer_name", "event", "role", "paid")
    list_filter = (PaymentRoleFilter,)
    raw_id_fields = ("pass_type",)
    readonly_fields = ("price",)