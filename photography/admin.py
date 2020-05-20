from django.contrib import admin
from .models import Photo, Camera, Lens, PhotoAlbum, Album

admin.site.register(Photo)
admin.site.register(Camera)
admin.site.register(Lens)
admin.site.register(PhotoAlbum)
admin.site.register(Album)

