import django.db.models
from django.contrib.auth.models import AbstractUser
from django.db.models import CharField
from django.db import models
from django.urls import reverse
# Create your models here.


class User(AbstractUser):
    GENDER_CHOICES = (
        ('M', 'MALE'),
        ('F', 'FEMALE'),
        ('O', 'OTHER'),
    )
#    id = models.AutoField(primary_key=True)
    name = CharField(max_length=50,unique=True)#,primary_key=True)
    first_name = CharField(max_length=30)
    last_name = CharField(max_length=30)
    nationality = CharField(max_length=3)
    gender = CharField(max_length=1, choices=GENDER_CHOICES)
    institute = CharField(max_length=255)
    avatar = models.URLField(verbose_name="Display Picture",blank=True)
    email = models.EmailField(unique=True)

    def delete_user(self):
        return reverse("staff:delete-user")
