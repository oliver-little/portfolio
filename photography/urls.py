from django.urls import path
from . import views

urlpatterns = [
    path("", views.photographyHome, name="photographyHome"),
]