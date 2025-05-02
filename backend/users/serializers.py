from rest_framework import serializers 
from .models import * 
from django.contrib.auth import get_user_model, authenticate
from rest_framework.exceptions import ValidationError
from django.db import IntegrityError
import logging

logger = logging.getLogger(__name__)
User = get_user_model()

class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(username=data['email'], password=data['password'])
        if not user:
            raise ValidationError('Invalid credentials')
        self.user = user  # Store the user object for later use
        return data

    def to_representation(self, instance):
        ret = super().to_representation(instance)
        ret.pop('password', None)
        return ret


class RegisterSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(write_only=True, required=True)
    
    class Meta:
        model = User
        fields = ('id', 'email', 'password', 'password2', 'username')
        extra_kwargs = {
            'password': {'write_only': True},
            'email': {'required': True},
            'username': {'required': True}
        }

    def validate_email(self, value):
        """Validate that the email is unique."""
        if User.objects.filter(email=value).exists():
            raise ValidationError('A user with this email already exists.')
        return value

    def validate_username(self, value):
        """Validate that the username is unique."""
        if User.objects.filter(username=value).exists():
            raise ValidationError('A user with this username already exists.')
        return value

    def validate(self, data):
        """Validate that passwords match."""
        if data['password'] != data['password2']:
            raise ValidationError({'password2': 'Passwords do not match.'})
        return data

    def create(self, validated_data):
        try:
            # Remove password2 from the data
            validated_data.pop('password2', None)
            
            # Create the user
            user = User.objects.create_user(
                email=validated_data['email'],
                username=validated_data['username'],
                password=validated_data['password']
            )
            
            logger.info(f"Successfully created user: {user.username}")
            return user
            
        except IntegrityError as e:
            logger.error(f"IntegrityError creating user: {str(e)}")
            raise ValidationError({
                'error': 'Unable to create user. The email or username may already be taken.'
            })
        except Exception as e:
            logger.error(f"Error creating user: {str(e)}")
            raise ValidationError({
                'error': 'An error occurred while creating the user.'
            })
        
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'email', 'username')
