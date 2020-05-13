
from django.contrib.admin import SimpleListFilter

from EventPayment.enums import Role

class PaymentRoleFilter(SimpleListFilter):
    title = 'role'
    parameter_name = 'role'

    def lookups(self, request, model_admin):
        return tuple([(role,role) for role in Role])

    def queryset(self, request, queryset):
        if self.value():
            db_string = self.value().lower()
            return queryset.filter(pass_type__role=Role.__getattr__(db_string))