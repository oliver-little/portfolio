from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse, HttpResponseNotFound
from django.utils import timezone
from .models import Post

def blogHome(request):
    posts = Post.objects.filter(published_date__lte=timezone.now()).order_by("published_date")
    return render(request, "blog/blogHome.html", {"posts" : posts})

def postDetail(request, slug):
    post = get_object_or_404(Post, slug=slug)
    if post.published_date == None or post.published_date > timezone.now():
        return HttpResponseNotFound()
    return render(request, 'blog/postDetail.html', {"post" : post})

def postJSON(request, slug):
    post = get_object_or_404(Post, slug=slug)
    if post.published_date == None or post.published_date > timezone.now():
        return HttpResponseNotFound()
    postJSON = {}
    postJSON["title"] = post.title
    postJSON["published_date"] = post.published_date
    postJSON["text"] = post.text
    return JsonResponse(postJSON)
