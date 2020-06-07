from django.contrib import admin
from enumchoicefield.admin import EnumListFilter
from pass_type.models.event import EventPass
from pass_type.admin.filters import PassFullFilter, EventTimeFilter


@admin.register(EventPass)
class EventPassAdmin(admin.ModelAdmin):
    fields = ("name", "description","role","price","event", "total_spots", "sold_spots", "remaining_spots", "sold_out")
    list_display = ("name","role","price","event", "total_spots", "sold_spots", "remaining_spots", "sold_out")
    list_filter = (EventTimeFilter, ("role",EnumListFilter), PassFullFilter,)
    readonly_fields = ("remaining_spots", "sold_spots", "sold_out")
    raw_id_fields = ("event",)