from django.shortcuts import render
from django.http import request, HttpResponse
from api.models import Task


# Create your views here.
def get_tasks(request):
    task1 = Task.objects.get(id=1)
    return HttpResponse(task1)
