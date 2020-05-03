
from django.contrib.admin import SimpleListFilter

from EventPayment.enums import Role

class RoleFilter(SimpleListFilter):
    title = 'role'
    parameter_name = 'role'

    def lookups(self, request, model_admin):
        return tuple([(role,role) for role in Role.all()])

    def queryset(self, request, queryset):
        print(self.value())
        if self.value():
            return queryset.filter(pass_type__role=Role.get_role(self.value().lower()))