from django.shortcuts import render
from rest_framework import viewsets
from .serializers import *
from .models import *
# Create your views here.
'''
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('name')
    serializer_class = UserSerializer
'''

class RoadmapViewSet(viewsets.ModelViewSet):
    queryset = Roadmap.objects.all().order_by('date')
    serializer_class = RoadmapSerializer

class AchievementViewSet(viewsets.ModelViewSet):
    queryset = Achievement.objects.all().order_by('date')
    serializer_class = AchievementSerializer

class CourseViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.all().order_by('date')
    serializer_class = CourseSerializer

class ForkViewSet(viewsets.ModelViewSet):
    queryset = Fork.objects.all().order_by('date')
    serializer_class = ForkSerializer


