from enum import Enum


class RemindMe(Enum):
    NEVER = 0
    DAILY = 1
    WEEKLY = 2
    BIWEEKLY = 3
    MONTHLY = 4
    ANNUALLY = 5

    @classmethod
    def choices(cls):
        return [(member.value, member.name) for member in cls]


class Currency(Enum):
    PEN = 0
    USD = 1

    @classmethod
    def choices(cls):
        return [(member.value, member.name) for member in cls]
