# Generated by Django 3.0.5 on 2020-06-08 17:22

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('pass_type', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='EventPassPayment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('price', models.IntegerField()),
                ('paid_online', models.BooleanField(default=False)),
                ('buyer_name', models.CharField(max_length=80)),
                ('buyer_phone', models.CharField(max_length=80)),
                ('buyer_email', models.EmailField(max_length=254)),
                ('pass_type', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='event_payments', to='pass_type.EventPass')),
            ],
            options={
                'verbose_name': 'Event payment',
                'verbose_name_plural': 'Event payments',
            },
        ),
        migrations.CreateModel(
            name='CoursePassPayment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('price', models.IntegerField()),
                ('paid_online', models.BooleanField(default=False)),
                ('buyer_name', models.CharField(max_length=80)),
                ('buyer_phone', models.CharField(max_length=80)),
                ('buyer_email', models.EmailField(max_length=254)),
                ('pass_type', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='course_payments', to='pass_type.CoursePass')),
            ],
            options={
                'verbose_name': 'Course payment',
                'verbose_name_plural': 'Course payments',
            },
        ),
    ]
