from django.contrib import admin
from pass_type.models.course import CoursePass


@admin.register(CoursePass)
class CoursePassAdmin(admin.ModelAdmin):
    fields = ("name", "description","role","price","event")
    list_display = ("name","role", "price", "event")
    raw_id_fields = ("event",)
