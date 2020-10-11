from rest_framework import serializers
from .models import *

class UserSerializer(serializers.HyperlinkedModelSerializer):
#    password = serializers.CharField(write_only=True)
    class Meta:
        model = User
        fields = ('id','name','password','first_name','last_name','nationality','gender','institute','avatar','email')
