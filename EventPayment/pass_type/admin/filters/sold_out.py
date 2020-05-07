from django.contrib.admin import SimpleListFilter


class PassFullFilter(SimpleListFilter):
    title = 'sold out'
    parameter_name = 'sold out'

    def lookups(self, request, model_admin):
        return (("T","True"), ("F","False"))

    def queryset(self, request, queryset):
        if self.value() == "T":
            return queryset.sold_out()
        elif self.value() == "F": 
            return queryset.passes_left()
        return queryset