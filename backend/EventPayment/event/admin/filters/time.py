from django.contrib.admin import SimpleListFilter


class TimeFilter(SimpleListFilter):
    title = 'time'
    parameter_name = 'time'

    def lookups(self, request, model_admin):
        return (("Pa","Past"), ("Pr","Present"), ("F","Future"))

    def queryset(self, request, queryset):
        if self.value() == "Pa":
            return queryset.past()
        elif self.value() == "Pr": 
            return queryset.present()
        elif self.value() == "F":
            return queryset.future()
        return queryset