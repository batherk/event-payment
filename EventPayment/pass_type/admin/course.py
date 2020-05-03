from django.contrib import admin
from enumchoicefield.admin import EnumListFilter
from pass_type.models.course import CoursePass
from .filters import PassFullFilter


@admin.register(CoursePass)
class CoursePassAdmin(admin.ModelAdmin):
    fields = ("role","price","event", "total_spots","remaining_spots", "full")
    list_display = ("role", "price", "event", "total_spots", "remaining_spots", "full")
    list_filter = ("event",("role",EnumListFilter), PassFullFilter)
    readonly_fields = ("remaining_spots", "full")
    raw_id_fields = ("event",)
