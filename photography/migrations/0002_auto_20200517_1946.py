# Generated by Django 3.0.6 on 2020-05-17 18:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('photography', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='photo',
            name='lens',
            field=models.ForeignKey(blank=True, default='', on_delete=models.SET(''), to='photography.Lens'),
        ),
        migrations.AlterField(
            model_name='photo',
            name='camera',
            field=models.ForeignKey(blank=True, default='', on_delete=models.SET(''), to='photography.Camera'),
        ),
    ]
