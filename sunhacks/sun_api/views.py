from django.shortcuts import render
from rest_framework.renderers import JSONRenderer
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import serializers

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

    @api_view(['GET',])
    def search_roadmap_public(self,argument):
        queryset = Roadmap.objects.all().filter(roadmap__icontains=argument)
        serializer = RoadmapSerializer(queryset)
        json = JSONRenderer().render(serializers.serializer.data)
        return Response(data=json)
    
    @api_view(['GET'],)
    def search_roadmap_user(self, user, argument):
        queryset = Roadmap.objects.all().filter(creator=user.name).filter(r_name__icontains=argument)
        serializer = RoadmapSerializer(queryset)
        json = JSONRenderer().render(serializers.serializer.data)
        return Response(data=json)


class AchievementViewSet(viewsets.ModelViewSet):
    queryset = Achievement.objects.all().order_by('date')
    serializer_class = AchievementSerializer

class CourseViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.all().order_by('date')
    serializer_class = CourseSerializer

class ForkViewSet(viewsets.ModelViewSet):
    queryset = Fork.objects.all().order_by('date')
    serializer_class = ForkSerializer
    

'''
@api_view(['GET',])
def search_roadmap(request,argument):
    if request == "GET":
        queryset = Roadmap.objects.all().filter(roadmap__icontains=argument)
'''