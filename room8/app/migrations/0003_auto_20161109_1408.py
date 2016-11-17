# -*- coding: utf-8 -*-
# Generated by Django 1.10.3 on 2016-11-09 14:08
from __future__ import unicode_literals

import app.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0002_imoveis_mensagens'),
    ]

    operations = [
        migrations.AlterModelManagers(
            name='user',
            managers=[
                ('objects', app.models.ModUserManager()),
            ],
        ),
        migrations.AddField(
            model_name='imoveis',
            name='arquivo',
            field=models.FileField(blank=True, null=True, upload_to='imgs/'),
        ),
        migrations.AddField(
            model_name='imoveis',
            name='nome_arquivo',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]
