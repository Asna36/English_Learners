from rest_framework import viewsets, permissions
from rest_framework.response import Response
from django.contrib.auth import get_user_model
from knox.models import AuthToken
from knox.views import LogoutView as KnoxLogoutView
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from django.http import HttpResponse
from django.conf import settings
from django.core.cache import cache
import requests
import traceback

from .serializers import RegisterSerializer, LoginSerializer, UserSerializer

User = get_user_model()
class LoginViewset(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    serializer_class = LoginSerializer

    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            user = serializer.user  # Get the authenticated user from serializer
            _, token = AuthToken.objects.create(user)
            return Response({
                "user": UserSerializer(user).data,
                "token": token
            })
        else:
            return Response(serializer.errors, status=400)


class RegisterViewset(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = User.objects.all()
    serializer_class = RegisterSerializer

    def create(self, request):
        """
        Register a new user and return only a success message.
        """
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            email = serializer.validated_data.get('email')
            if User.objects.filter(email=email).exists():
                return Response({"error": "Email already exists"}, status=400)

            username = serializer.validated_data.get('username')
            if User.objects.filter(username=username).exists():
                return Response({"error": "Username already exists"}, status=400)

            user = serializer.save()
            return Response({
                "message": "Registration successful! Please login.",
                "status": "success"
            })
        else:
            return Response(serializer.errors, status=400)


class UserViewset(viewsets.ViewSet):
    permission_classes = [IsAuthenticated]
    queryset = User.objects.all()
    serializer_class = RegisterSerializer

    def list(self, request):
        queryset = User.objects.all()
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_logged_in_user(request):
    user = request.user
    return Response({
        'id': user.id,
        'email': user.email,
        'username': user.username,
    })
