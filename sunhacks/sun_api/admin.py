from django.contrib import admin
from .models import Achievement,User,Fork,Course,Roadmap
# Register your models here.
#admin.site.register(User)
admin.site.register(Roadmap)
admin.site.register(Course)
admin.site.register(Achievement)
admin.site.register(Fork)
