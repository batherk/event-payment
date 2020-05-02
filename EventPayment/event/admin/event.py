from django.contrib import admin
from event.models.event import Event


@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    search_fields = ("name",)
    list_display = ("name",)
