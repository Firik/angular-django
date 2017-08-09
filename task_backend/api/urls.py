from django.conf.urls import url
from api.views import get_tasks

urlpatterns = [
    url('^tasks/$', get_tasks, name='get_tasks'),
]
