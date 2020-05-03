
from django.contrib.admin import SimpleListFilter

from EventPayment.enums import Role

class EventPassFullFilter(SimpleListFilter):
    title = 'full'
    parameter_name = 'full'

    def lookups(self, request, model_admin):
        return (("T","True"), ("F","False"))

    def queryset(self, request, queryset):
        if self.value() == "T":
            return queryset.full()
        elif self.value() == "F": 
            return queryset.not_full()
        return queryset