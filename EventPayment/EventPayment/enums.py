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