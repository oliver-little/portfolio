# Generated by Django 3.0.6 on 2020-05-19 21:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('photography', '0006_auto_20200519_1124'),
    ]

    operations = [
        migrations.AddField(
            model_name='photo',
            name='highlightImage',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='photo',
            name='thumbnailUrl',
            field=models.URLField(default=''),
        ),
    ]
