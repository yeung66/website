# -*- coding: utf-8 -*-
# Generated by Django 1.10.2 on 2017-02-25 09:02
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('signup', '0002_auto_20170225_1659'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='team',
            name='teamID',
        ),
    ]