from django.db import models
from django.conf import settings
from django.utils import timezone
from django.template.defaultfilters import slugify

# Create your models here.

class Post(models.Model):
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    title = models.CharField(max_length=200, unique=True)
    slug = models.SlugField(('slug'), max_length=60, blank=True, unique=True)
    text = models.TextField()
    created_date = models.DateTimeField(default=timezone.now)
    published_date = models.DateTimeField(blank=True, null=True)

    def publish(self):
        self.published_date = timezone.now()
        self.save()

    def save(self, *args, **kwargs):
        if not self.id:
            self.slug= slugify(self.title)
        super().save(*args, **kwargs)
    

    def __str__(self):
        return self.title