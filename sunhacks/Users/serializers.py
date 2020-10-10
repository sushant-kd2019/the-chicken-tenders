from rest_framework import serializers
from .models import *

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('id','name','first_name','last_name','nationality','gender','institute','avatar','email')
