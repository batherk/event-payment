# Generated by Django 3.0.5 on 2020-05-03 07:05

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('pass_type', '0005_auto_20200503_0905'),
        ('payment', '0002_auto_20200503_0022'),
    ]

    operations = [
        migrations.AlterField(
            model_name='coursepasspayment',
            name='pass_type',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='course_payments', to='pass_type.CoursePass'),
        ),
        migrations.AlterField(
            model_name='eventpasspayment',
            name='pass_type',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='event_payments', to='pass_type.EventPass'),
        ),
    ]
