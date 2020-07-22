

from django.urls import path, include
from django.conf import settings

from rest_framework import routers

from . import views

router = routers.DefaultRouter()

router.register('transactions', views.TransactionView)
router.register('category', views.CategoryView)
router.register('label', views.LabelView)

urlpatterns = [
    path('', include(router.urls)),
]
