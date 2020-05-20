from django.db import models
from django.utils import timezone

class Camera(models.Model):
    cameraType = models.CharField(max_length=200)

    def __str__(self):
        return self.cameraType

class Lens(models.Model):
    lensType = models.CharField(max_length=200)

    def __str__(self):
        return self.lensType

class Photo(models.Model):
    title = models.CharField(max_length=200)
    url = models.URLField(max_length=200, default="")
    thumbnailUrl = models.URLField(max_length=200, default="")
    camera = models.ForeignKey(Camera, on_delete=models.SET(""), blank=True, null=True, default="")
    lens = models.ForeignKey(Lens, on_delete=models.SET(""), blank=True, null=True, default="")
    createdDate = models.DateTimeField(default=timezone.now)
    publishedDate = models.DateTimeField(blank=True, null=True)

    def publish(self):
        self.publishedDate = timezone.now()
        self.save()

    def __str__(self):
        return self.title

class Album(models.Model):
    title = models.CharField(max_length=200)

    def __str__(self):
        return self.title

class PhotoAlbum(models.Model):
    photo = models.ForeignKey(Photo, on_delete=models.CASCADE)
    album = models.ForeignKey(Album, on_delete=models.CASCADE)

    def __str__(self):
        return photo.title + album.title

