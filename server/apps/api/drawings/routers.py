from django.urls import path, include
from rest_framework import routers
from apps.api.drawings import views

router = routers.DefaultRouter()
router.register(r"", views.DrawingView, basename="drawings")

urlpatterns = router.urls
