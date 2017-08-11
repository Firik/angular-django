from task.models import Task
from rest_framework import generics
from task.serializer import TaskSerializer


# Create your views here.
class TasksList(generics.ListCreateAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
