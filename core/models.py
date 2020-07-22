from django.db import models
import datetime


class Category (models.Model):
    name = models.CharField(max_length=20)


class Label (models.Model):
    name = models.CharField(max_length=20)


class Transaction(models.Model):
    title = models.CharField(max_length=50, null=True, blank=True)
    amount = models.FloatField(null=False, blank=False)
    date = models.DateField(
        default=datetime.date.today, null=False, blank=False)
    category = models.ForeignKey(
        Category, on_delete=models.SET_NULL, null=True, blank=True)
    labels = models.ManyToManyField(Label, blank=True)
