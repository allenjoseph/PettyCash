from enum import Enum


class RemindMe(Enum):
    NEVER = 0
    DAILY = 1
    WEEKLY = 2
    BIWEEKLY = 3
    MONTHLY = 4
    ANNUALLY = 5


class Currency(Enum):
    PEN = 0
    USD = 1
