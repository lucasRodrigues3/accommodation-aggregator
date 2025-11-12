from rest_framework import viewsets, permissions, filters
from django_filters.rest_framework import DjangoFilterBackend
from .models import Accommodation
from .serializers import AccommodationSerializer

class AccommodationViewSet(viewsets.ModelViewSet):
    queryset = Accommodation.objects.all().order_by("-date_added")
    serializer_class = AccommodationSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ["location", "source", "price"]
    search_fields = ["title", "description", "location"]
    ordering_fields = ["price", "date_added"]
