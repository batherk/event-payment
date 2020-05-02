from django.contrib import admin
from pass_type.models.event import EventPass


@admin.register(EventPass)
class EventPassAdmin(admin.ModelAdmin):
    fields = ("name", "description","role","price","event", "max_amount", "get_remaining_spots")
    list_display = ("name","role","price","event", "max_amount", "get_remaining_spots")
    readonly_fields = ("get_remaining_spots",)
    raw_id_fields = ("event",)