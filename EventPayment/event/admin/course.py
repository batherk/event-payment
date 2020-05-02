from django.contrib import admin
from event.models.course import Course


@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    fields = ("name", "description", "max_amount", "address", "week_start","week_end")
    list_display = ("name",)
