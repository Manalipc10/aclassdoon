# Generated by Django 3.2.8 on 2021-10-16 15:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('adv', '0002_alter_ad_email'),
    ]

    operations = [
        migrations.AddField(
            model_name='ad',
            name='img1',
            field=models.ImageField(default='', upload_to='assets'),
        ),
        migrations.AddField(
            model_name='ad',
            name='img2',
            field=models.ImageField(default='', upload_to='assets'),
        ),
        migrations.AddField(
            model_name='ad',
            name='img3',
            field=models.ImageField(default='', upload_to='assets'),
        ),
        migrations.AddField(
            model_name='ad',
            name='priority',
            field=models.IntegerField(default=0),
        ),
    ]
