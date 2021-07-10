from django.contrib.auth import get_user_model, authenticate
from django.contrib.auth.models import update_last_login
from rest_framework import serializers
from rest_framework_jwt.settings import api_settings

from .models import CustomUser

# User = get_user_model()
#
# class UserCreateSerializer(serializers.Serializer):
#     email = serializers.EmailField(required=True)
#     username = serializers.CharField(required=True)
#     password = serializers.CharField(required=True)
#     print(email)
#
#     def create(self, validated_data):
#         user = User.objects.create(
#             email = validated_data['email'],
#             username = validated_data['username'],
#         )
#         user.set_password(validated_data['password'])
#
#         user.save()
#         return user

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        # 'username' 추가
        fields = ('email','username','last_login','date_joined','is_staff')

# JWT_PAYLOAD_HANDLER = api_settings.JWT_PAYLOAD_HANDLER
# JWT_ENCODE_HANDLER = api_settings.JWT_ENCODE_HANDLER

# class UserLoginSerializer(serializers.Serializer):
#     email = serializers.CharField(max_length=64)
#     password = serializers.CharField(max_length=128, write_only=True)
#     token = serializers.CharField(max_length=255,read_only=True)
#
#     def validate(self, data):
#         email = data.get("email", None)
#         password = data.get("password", None)
#         user = authenticate(email=email, password=password)
#
#         if  user is None:
#             return{
#                 'email' : 'None'
#             }
#         try:
#             payload = JWT_PAYLOAD_HANDLER(user)
#             jwt_token = JWT_ENCODE_HANDLER(payload)
#             update_last_login(None, user)
#         except User.DoesNotExist:
#             raise serializers.ValidationError(
#                 'User with given email and password does not exists'
#             )
#         return{
#             'email' : user.email,
#             'token' : jwt_token
#         }
