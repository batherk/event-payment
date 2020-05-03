from enumchoicefield import ChoiceEnum

class Day(ChoiceEnum):
    monday = "Monday"
    tuesday = "Tuesday"
    wednesday = "Wednesday"
    thursday = "Thursday"
    friday = "Friday"
    saturday = "Saturday"
    sunday = "Sunday"


class Role(ChoiceEnum):
    leader = "Leader"
    follower = "Follower"
    couple = "Couple"
    solo = "Solo"

    @classmethod
    def all(cls):
        return [role for role in cls]

    @classmethod
    def get_role(cls,string):
        for role in cls.all():
            if role.name == string:
                return role
        return None