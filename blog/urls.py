from django.urls import path
from . import views

urlpatterns = [
    path("", views.blogHome, name="blogHome"),
    path("posts/<slug:slug>/", views.postDetail, name="postDetail"),
    path("posts/json/<slug:slug>/", views.postJSON),
]