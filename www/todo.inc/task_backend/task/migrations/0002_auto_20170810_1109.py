# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2017-08-10 11:09
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('task', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='status',
            field=models.SmallIntegerField(default=0, max_length=2),
        ),
    ]