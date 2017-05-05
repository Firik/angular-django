from django.conf.urls import url
from notes.views import MainPageView

urlpatterns = [
	url(r'^$', MainPageView.as_view(), name="index"),
]
