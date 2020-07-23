from django.shortcuts import render
from django.contrib.auth import get_user_model
from rest_framework.views import APIView
from rest_framework import viewsets
from rest_framework.authtoken.models import Token
from .serializers import UserLogin,UserDetailSerializer,ImageGallarySerializer
from rest_framework.response import Response
from .models import ImageGallary

# Create your views here.
User = get_user_model()
class LoginView(APIView):
    def post(self, request):
        serelize = UserLogin(data=request.data)
        serelize.is_valid(raise_exception=True)
        objectuser = serelize.validated_data
        token, _ = Token.objects.get_or_create(user=objectuser)
        return Response({'token':token.key}, headers={"Access-Control-Allow-Origin": "*"})

class UserDetailView(viewsets.ModelViewSet):
    queryset                = User.objects.all()
    serializer_class        = UserDetailSerializer

class ImageGallaryView(viewsets.ModelViewSet):
    queryset                = ImageGallary.objects.all()
    serializer_class        = ImageGallarySerializer
