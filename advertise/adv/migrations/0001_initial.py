# Generated by Django 3.2.8 on 2021-10-13 05:09

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Ad',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('business_name', models.CharField(max_length=200)),
                ('description', models.TextField()),
                ('category', models.CharField(max_length=200)),
                ('services', models.TextField()),
                ('contact_no', models.BigIntegerField()),
                ('email', models.EmailField(max_length=200)),
                ('thumbnail', models.ImageField(default='', upload_to='assets')),
            ],
        ),
    ]