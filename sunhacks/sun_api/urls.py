from django.urls import include, path
from rest_framework import routers
from . import views
import Users.views
router = routers.DefaultRouter()
router.register('Roadmap',views.RoadmapViewSet)
router.register('Course',views.CourseViewSet)
router.register('Achievement',views.AchievementViewSet)
router.register('Fork',views.ForkViewSet)
router.register('User',Users.views.UserViewSet)

urlpatterns = [
    path('',include(router.urls)),
    path('api-auth/',include('rest_framework.urls',namespace='rest_framework'))
]
