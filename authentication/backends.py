from django.contrib.auth.backends import ModelBackend
from authentication.models import (
    User, Influencer, Expert, Customer
)

class CustomModelBackend(ModelBackend):

    def authenticate(self, *args, **kwargs):
        return self.downcast_user_type(super().authenticate(*args, **kwargs))

    
    def get_user(self, *args, **kwargs):
        return self.downcast_user_type(super().get_user(*args, **kwargs))

    
    def downcast_user_type(self, user):
        try:
            user = User.objects.get(pk=user.pk)
            return user
        except:
            pass
        try:
            expert = Expert.objects.get(user=user)
            return expert
        except:
            pass
        try:
            influencer = Influencer.objects.get(user=user)
            return influencer
        except:
            pass
        try:
            customer = Customer.objects.get(user=user)
            return customer
        except:
            pass
        return user