from rest_framework import serializers

from task.models import Task


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ('status', 'day', 'month', 'year', 'timeStart', 'timeEnd', 'description')
