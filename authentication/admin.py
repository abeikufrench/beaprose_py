from django.contrib import admin
from .models import Customer, Expert, Influencer, User

# Register your models here.
admin.site.register(Customer)
admin.site.register(Expert)
admin.site.register(Influencer)
admin.site.register(User)
