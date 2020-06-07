from django.contrib import admin
from enumchoicefield.admin import EnumListFilter
from pass_type.models.course import CoursePass
from .filters import PassFullFilter, CourseTimeFilter


@admin.register(CoursePass)
class CoursePassAdmin(admin.ModelAdmin):
    fields = ("role","price","event", "total_spots","sold_spots", "remaining_spots", "sold_out")
    list_display = ("role", "price", "event", "total_spots", "sold_spots", "remaining_spots", "sold_out")
    list_filter = (CourseTimeFilter, ("role",EnumListFilter), PassFullFilter,)
    readonly_fields = ("remaining_spots", "sold_spots", "sold_out")
    raw_id_fields = ("event",)
