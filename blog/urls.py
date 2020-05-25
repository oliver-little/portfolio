from django.urls import path
from . import views

urlpatterns = [
    path("", views.blogHome, name="blogHome"),
    path("posts/<int:pk>/", views.postDetail, name="postDetail"),
    path("posts/json/<int:pk>/", views.postJSON),
]