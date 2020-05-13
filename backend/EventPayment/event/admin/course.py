from django.contrib import admin
from event.models.course import Course

from .filters import TimeFilter


@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    fields = ("name", "description","address", "week_start", "week_end", "day", "year", "time_start", "time_end")
    list_display = ("name","day","time_start","time_end","week_start","week_end")
    list_filter = (TimeFilter,)
