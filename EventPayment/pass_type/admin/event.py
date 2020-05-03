from django.contrib import admin
from enumchoicefield.admin import EnumListFilter
from pass_type.models.event import EventPass
from pass_type.admin.filters import PassFullFilter, EventTimeFilter


@admin.register(EventPass)
class EventPassAdmin(admin.ModelAdmin):
    fields = ("name", "description","role","price","event", "total_spots", "remaining_spots", "full")
    list_display = ("name","role","price","event", "total_spots", "remaining_spots", "full")
    list_filter = (("role",EnumListFilter), PassFullFilter, EventTimeFilter)
    readonly_fields = ("remaining_spots", "full")
    raw_id_fields = ("event",)