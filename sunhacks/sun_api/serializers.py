from rest_framework import serializers
from .models import *

class RoadmapSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Roadmap
        fields = ('id','creator','r_name','number_of_forks','number_of_courses','details','stars','date')

class CourseSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Course
        fields = ('id','roadmap','course_name','course_link','course_description','date')

class AchievementSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Achievement
        fields = ('id','user','text','link','date')

class ForkSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Fork
        fields = ('id','forker','roadmap_id','progress','date')