from django.db import models

class PassQuerySet(models.QuerySet):
    def full(self):
        full = self.all()
        for pass_type in self:
            if not pass_type.full():
                full = full.exclude(pk=pass_type.pk)
        return full

    def not_full(self):
        not_full = self.all()
        for pass_type in self:
            if pass_type.full():
                not_full = not_full.exclude(pk=pass_type.pk)
        return not_full