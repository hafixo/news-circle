# Generated by Django 2.1.7 on 2019-04-03 01:25

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('rest', '0009_auto_20190403_0124'),
    ]

    operations = [
        migrations.AlterField(
            model_name='invitation',
            name='group',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='rest.Group'),
        ),
    ]
