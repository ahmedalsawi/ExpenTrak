from django.shortcuts import render

from rest_framework import viewsets, filters, decorators
from rest_framework.permissions import IsAuthenticated

from . import models
from . import serializers


class TransactionView(viewsets.ModelViewSet):
    queryset = models.Transaction.objects.all()
    serializer_class = serializers.TransactionSerializer
    #permission_classes = (IsAuthenticated,)
