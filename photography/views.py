from django.shortcuts import render
from .models import Photo
from django.utils import timezone

def photographyHome(request):
    images = Photo.objects.filter(publishedDate__lte=timezone.now()).order_by("?")
    return render(request, "photography/photographyHome.html", {"images": images})