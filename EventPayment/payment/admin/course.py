from django.contrib import admin
from payment.models import CoursePassPayment

from .filters.role import RoleFilter


@admin.register(CoursePassPayment)
class CoursePassPaymentAdmin(admin.ModelAdmin):
    fields = ("pass_type", "price","paid","buyer_name","buyer_phone","buyer_email")
    list_display = ("buyer_email", "buyer_name", "pass_type", "paid")
    list_filter = (RoleFilter,)
    raw_id_fields = ("pass_type",)
    readonly_fields = ("price",)