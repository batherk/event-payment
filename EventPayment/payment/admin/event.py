from django.contrib import admin
from payment.models import EventPassPayment

from .filters.role import PaymentRoleFilter

@admin.register(EventPassPayment)
class EventPassPaymentAdmin(admin.ModelAdmin):
    fields = ("pass_type", "price","paid_manually", "paid","buyer_name","buyer_phone","buyer_email")
    list_display = ("buyer_email", "buyer_name", "event", "role", "paid",)
    list_filter = (PaymentRoleFilter,)
    raw_id_fields = ("pass_type",)
    readonly_fields = ("price", "paid")