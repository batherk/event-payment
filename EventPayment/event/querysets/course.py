from django.db import models
from datetime import date

def get_current_week():
    return date.today().isocalendar()[1]

class CourseQuerySet(models.QuerySet):
    def past(self):
        earlier_years = self.filter(year__lt=date.today().year)
        this_year = self.filter(year=date.today().year).filter(week_end__lt=get_current_week())
        return earlier_years | this_year

    def present(self):
        return self.filter(year=date.today().year).filter(week_start__lte=get_current_week()).filter(week_end__gte=get_current_week())

    def future(self):
        future_years = self.filter(year__gt=date.today().year)
        this_year = self.filter(year=date.today().year).filter(week_start__gt=get_current_week())
        return future_years | this_year