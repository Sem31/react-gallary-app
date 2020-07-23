from django.db import models
from django.conf import settings
from django.contrib.auth.models import AbstractUser
from django.utils.translation import ugettext_lazy as _

from .managers import UserManager
# Create your models here.

class User(AbstractUser):
	username = None
	first_name=None
	last_name=None
	name=models.CharField(max_length=30,blank=True)
	email = models.EmailField(_('email address'), unique=True)
	city=models.CharField(max_length=30, blank=True)
	profile_pic = models.ImageField(blank = True,null = True)
	phone = models.CharField(max_length=10)

	USERNAME_FIELD = 'email'
	REQUIRED_FIELDS = []

	objects = UserManager()

	def __str__(self):
		return self.email

class ImageGallary(models.Model):
	user        	= models.ForeignKey(settings.AUTH_USER_MODEL,on_delete=models.CASCADE)
	name			= models.CharField(max_length=255)
	tags			= models.CharField(max_length=255)
	color			= models.CharField(max_length=255)
	description		= models.CharField(max_length=255)
	image			= models.ImageField(upload_to='./images/')

	def __str__(self):
		return self.name