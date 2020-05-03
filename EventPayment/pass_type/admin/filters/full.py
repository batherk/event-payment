
from django.contrib.admin import SimpleListFilter

from EventPayment.enums import Role

class PassFullFilter(SimpleListFilter):
    title = 'full'
    parameter_name = 'full'

    def lookups(self, request, model_admin):
        return ((1,"True"), (2,"False"))

    def queryset(self, request, queryset):
        if self.value():
            if self.value() == 1:
                return queryset.full()
            else: 
                return queryset.not_full()