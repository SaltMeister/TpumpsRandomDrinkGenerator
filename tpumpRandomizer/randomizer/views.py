from django.shortcuts import render
from django.template.loader import get_template
from django.http import HttpResponse

# Create your views here.
def home(request):
    return render(request, "base.html", None)

def history(request):
    return render(request, "history.html",None)    