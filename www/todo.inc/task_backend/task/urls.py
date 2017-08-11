from django.conf.urls import url

from task.views import TasksList

urlpatterns = [
    url('^$', TasksList.as_view(), name='task_list'),
]
