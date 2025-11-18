from rest_framework import generics
from django.contrib.auth.models import User
from .serializers import RegisterSerializer

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer
