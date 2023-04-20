from django.shortcuts import render
from .models import FotoGaleria

# Create your views here.

def index(request):
    imgs = FotoGaleria.objects.all()
    return render(request, 'posts/index.html', {'imgs': imgs})