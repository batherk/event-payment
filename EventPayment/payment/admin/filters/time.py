from django.contrib.admin import SimpleListFilter
from event.models import Event, Course


class EventPaymentTimeFilter(SimpleListFilter):
    title = 'time'
    parameter_name = 'time'

    def lookups(self, request, model_admin):
        return (("Past", "Past"), ("Present", "Present"), ("Future","Future"))

    def queryset(self, request, queryset):
        if self.value() == "Past":
            return queryset.filter(pass_type__event__in=Event.objects.past())
        elif self.value() == "Present": 
            return queryset.filter(pass_type__event__in=Event.objects.present())
        elif self.value() == "Future": 
            return queryset.filter(pass_type__event__in=Event.objects.future())
        else:
            return queryset
        

class CoursePaymentTimeFilter(SimpleListFilter):
    title = 'time'
    parameter_name = 'time'

    def lookups(self, request, model_admin):
        return (("Past", "Past"), ("Present", "Present"), ("Future","Future"))

    def queryset(self, request, queryset):
        if self.value() == "Past":
            return queryset.filter(pass_type__event__in=Course.objects.past())
        elif self.value() == "Present": 
            return queryset.filter(pass_type__event__in=Course.objects.present())
        elif self.value() == "Future": 
            return queryset.filter(pass_type__event__in=Course.objects.future())
        else:
            return queryset