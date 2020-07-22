from django.shortcuts import render

from rest_framework import viewsets, filters, decorators
from rest_framework.permissions import IsAuthenticated

from . import models
from . import serializers


class TransactionView(viewsets.ModelViewSet):
    queryset = models.Transaction.objects.all()
    serializer_class = serializers.TransactionSerializer
    #permission_classes = (IsAuthenticated,)


class LabelView(viewsets.ModelViewSet):
    queryset = models.Label.objects.all()
    serializer_class = serializers.LabelSerializer
    #permission_classes = (IsAuthenticated,)


class CategoryView(viewsets.ModelViewSet):
    queryset = models.Category.objects.all()
    serializer_class = serializers.CategorySerializer
    #permission_classes = (IsAuthenticated,)
