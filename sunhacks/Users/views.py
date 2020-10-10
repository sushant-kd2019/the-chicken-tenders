from django.shortcuts import render
from rest_framework import viewsets
from .serializers import *
from .models import *
# Create your views here.

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('name')
    serializer_class = UserSerializer