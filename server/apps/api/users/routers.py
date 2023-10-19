from django.urls import path, include
from rest_framework import routers
from apps.api.users import views

router = routers.DefaultRouter()
router.register(r"", views.UserView, basename="users")

urlpatterns = router.urls
