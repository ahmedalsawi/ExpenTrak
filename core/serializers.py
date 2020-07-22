from rest_framework import serializers

from . import models


class TransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Transaction
        fields = '__all__'


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Category
        fields = '__all__'


class LabelSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Label
        fields = '__all__'
