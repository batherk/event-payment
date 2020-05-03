from django.contrib import admin
from enumchoicefield.admin import EnumListFilter
from pass_type.models.course import CoursePass


@admin.register(CoursePass)
class CoursePassAdmin(admin.ModelAdmin):
    fields = ("role","price","event", "max_amount","get_remaining_spots")
    list_display = ("role", "price", "event", "max_amount", "get_remaining_spots")
    list_filter = ("event",("role",EnumListFilter),)
    readonly_fields = ("get_remaining_spots",)
    raw_id_fields = ("event",)
