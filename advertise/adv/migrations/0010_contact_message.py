# Generated by Django 3.2.8 on 2021-10-19 14:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('adv', '0009_auto_20211018_1311'),
    ]

    operations = [
        migrations.AddField(
            model_name='contact',
            name='message',
            field=models.TextField(blank=True, null=True),
        ),
    ]