# Generated by Django 3.0.8 on 2020-07-22 17:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0003_auto_20200722_1703'),
    ]

    operations = [
        migrations.AddField(
            model_name='transaction',
            name='labels',
            field=models.ManyToManyField(blank=True, null=True, to='core.Label'),
        ),
    ]
