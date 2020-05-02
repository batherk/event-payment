from django.contrib import admin
from event.models.event import Event


@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    search_fields = ("name","description","address","date_start","date_end")
    list_display = ("name","date_start","date_end")
