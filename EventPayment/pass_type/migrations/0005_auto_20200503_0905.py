# Generated by Django 3.0.5 on 2020-05-03 07:05

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('pass_type', '0004_auto_20200503_0026'),
    ]

    operations = [
        migrations.RenameField(
            model_name='coursepass',
            old_name='max_amount',
            new_name='total_spots',
        ),
        migrations.RenameField(
            model_name='eventpass',
            old_name='max_amount',
            new_name='total_spots',
        ),
    ]
