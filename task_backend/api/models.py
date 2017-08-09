from django.db import models


class Task(models.Model):
    id = models.IntegerField(primary_key=True, unique=True)
    status = models.SmallIntegerField(default=0)
    day = models.SmallIntegerField(default=0)
    month = models.SmallIntegerField(default=0)
    year = models.IntegerField(default=0)
    timeStart = models.IntegerField(default=0)
    timeEnd = models.IntegerField(default=0)
    description = models.CharField(null=False, max_length=2044)

    def __str__(self):
        return self.description
