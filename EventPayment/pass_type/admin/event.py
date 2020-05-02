from django.contrib import admin
from pass_type.models.event import EventPass


@admin.register(EventPass)
class EventPassAdmin(admin.ModelAdmin):
    fields = ("name", "description","role","price","event")
    list_display = ("name","role","price","event")
    raw_id_fields = ("event",)