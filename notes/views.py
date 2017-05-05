from .models import Note
from django.views.generic.base import TemplateView


class MainPageView(TemplateView):
	template_name = "notes/index.html"

	def get_context_data(self, **qwargs):
		context = {
			'title': 'Main page',
			'notes': Note.objects.all()
		}
		return context
