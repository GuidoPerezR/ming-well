from rest_framework.serializers import ModelSerializer
from apps.api.drawings.models import Drawings


class DrawingSerializer(ModelSerializer):
    class Meta:
        model = Drawings
        fields = "__all__"
