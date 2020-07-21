from django.shortcuts import render

from rest_framework import viewsets, filters, decorators

from . import models
from . import serializers


class TransactionView(viewsets.ModelViewSet):
    queryset = models.Transaction.objects.all()
    serializer_class = serializers.TransactionSerializer
