from django.db import models

class PassQuerySet(models.QuerySet):
    def sold_out(self):
        full = self.all()
        for pass_type in self:
            if not pass_type.sold_out():
                full = full.exclude(pk=pass_type.pk)
        return full

    def passes_left(self):
        not_full = self.all()
        for pass_type in self:
            if pass_type.sold_out():
                not_full = not_full.exclude(pk=pass_type.pk)
        return not_full