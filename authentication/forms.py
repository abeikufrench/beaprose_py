from django.contrib.auth import get_user_model
from django.contrib.auth.forms import UserCreationForm
from django import forms
from django.db import transaction
from .models import User, Customer, Expert, Influencer

class CustomerSignUpForm(UserCreationForm):
    email = forms.EmailField(max_length=200, help_text="Required")

    class Meta:
        model = User
        fields = ("email", "password1", "password2", "first_name", "last_name", "phoneNumber")

    @transaction.atomic
    def save(self):
        """
        if the applicant is an expert already, we want to downgrade to a
        customer
        """
        user = super().save(commit=False)
        user.is_expert = False
        user.is_customer = True
        user.is_active = False
        user.save()
        customer = Customer.objects.create(user=user)
        return user


class ExpertSignUpForm(UserCreationForm):
    email = forms.EmailField(max_length=200, help_text="Required")

    class Meta:
        model = User
        fields = (
            "email",
            "password1",
            "password2",
            "first_name",
            "last_name",
        )

    @transaction.atomic
    def save(self):
        """"
        if the applicant is an customer already, we want to upgrade him/her to
        an expert
        """
        user = super().save(commit=False)
        user.is_customer = False
        user.is_expert = True
        user.is_active = False
        user.save()
        expert = Expert.objects.create(user=user)
        return user