from rest_framework import serializers
from django.contrib.auth import authenticate
from .models import User,ImageGallary
from rest_framework import exceptions


class UserLogin(serializers.ModelSerializer):
    email=serializers.CharField(max_length=50)
    password=serializers.CharField(max_length=20)

    class Meta:
        model = User
        fields = ('email','password')

    def validate(self,data):
        email=data.get('email')
        password=data.get('password')
        if email and password:
            auth=authenticate(email=email,password=password)
            if auth:
                return auth
            else:
                raise  exceptions.ValidationError('Email or Password Invalid')
        else:
            raise exceptions.ValidationError('fill all the fields')

class UserDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model       = User
        fields      = ('id','name','email','password')

    def create(self,validated_data):
        name    = validated_data.get('name')
        email       = validated_data.get('email')
        password    = validated_data.get('password')
        user_obj    = User.objects.create(name=name,email=email)
        user_obj.set_password(password)
        user_obj.save()
        return user_obj

class ImageGallarySerializer(serializers.ModelSerializer):
    class Meta:
        model       = ImageGallary
        fields      = ('user','name','tags','description','image')
