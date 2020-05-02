from django.contrib import admin
from payment.models import EventPassPayment


@admin.register(EventPassPayment)
class EventPassPaymentAdmin(admin.ModelAdmin):
    fields = ("pass_type", "price","paid","buyer_name","buyer_phone","buyer_email")
    list_display = ("buyer_email", "buyer_name", "pass_type", "paid")
    raw_id_fields = ("pass_type",)
    readonly_fields = ("price",)