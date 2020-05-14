from django.contrib import admin
from payment.models import EventPassPayment

from .filters import PaymentRoleFilter, EventPaymentTimeFilter

@admin.register(EventPassPayment)
class EventPassPaymentAdmin(admin.ModelAdmin):
    fields = ("pass_type", "price","paid_online", "buyer_name","buyer_phone","buyer_email")
    list_display = ("buyer_email", "buyer_name", "event", "role", "paid_online",)
    list_filter = (EventPaymentTimeFilter, PaymentRoleFilter,)
    raw_id_fields = ("pass_type",)
    readonly_fields = ("price","paid_online")