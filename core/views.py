from django.shortcuts import render
from .models import Note

def home(request):
    return render(request, "index.html")

def download(request,pk):
    start = 12*(int(pk)-1)
    end = (12*int(pk))-1
    notes = Note.objects.all()[start:end]
    context = {
        'notes': notes
    }
    return render(request, "download.html", context)