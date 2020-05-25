from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse
from django.utils import timezone
from .models import Post

def blogHome(request):
    posts = Post.objects.filter(published_date__lte=timezone.now()).order_by("published_date")
    return render(request, "blog/blogHome.html", {"posts" : posts})

def postDetail(request, pk):
    post = get_object_or_404(Post, pk=pk)
    return render(request, 'blog/postDetail.html', {"post" : post})

def postJSON(request, pk):
    post = get_object_or_404(Post, pk=pk)
    postJSON = {}
    postJSON["title"] = post.title
    postJSON["published_date"] = post.published_date
    postJSON["text"] = post.text
    return JsonResponse(postJSON)
