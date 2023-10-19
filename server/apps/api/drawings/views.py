from rest_framework import viewsets
from .models import Drawings
from .serializers import DrawingSerializer


class DrawingView(viewsets.ModelViewSet):
    serializer_class = DrawingSerializer
    queryset = Drawings.objects.all()
