from django.shortcuts import render

from rest_framework import viewsets, permissions
from .models import Accommodation
from .serializers import AccommodationSerializer

class AccommodationViewSet(viewsets.ModelViewSet):
    queryset = Accommodation.objects.all().order_by("-date_added")
    serializer_class = AccommodationSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
