from django.db import models
import uuid
from django.contrib.auth.models import AbstractUser
from django.utils.translation import ugettext_lazy as _
from django.conf import settings

from authentication.managers import UserManager
import os

def upload_profile_photo(instance, filename):
    return "{0}/profile_photo/{1}".format(instance.pk, filename)

# Create your models here.
# User types
class User(AbstractUser):
    """Main User model"""
    MARITAL_STATUS_CHOICES = (
        ("M", "Married"),
        ("S", "Single")
    )
    # id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    username = None
    email = models.EmailField(_("Email Address"), unique=True)
    dob = models.DateField(_("Date of Birth"), blank=True, null=True)
    marital_status = models.CharField(_("Marital Status"), max_length=1, choices=MARITAL_STATUS_CHOICES, blank=True, null=True)
    profile_photo = models.ImageField(_("Profile Photo"), 
                                    upload_to=upload_profile_photo, 
                                    blank=True, 
                                    null=True,
                                    default=os.path.join(settings.MEDIA_ROOT, "default", "persion.svg")
                                    )
    phoneNumber = models.CharField(_("Phone Number"), max_length=20, blank=True, null=True)
    phoneNumberVerified = models.BooleanField(_("Phone Number Verified"), default=False)
    is_expert = models.BooleanField(_("Expert Status"), default=False)
    is_customer = models.BooleanField(_("Customer Status"), default=False)
    is_influencer = models.BooleanField(_("Influencer Status"), default=False)


    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    objects = UserManager()

    def __str__(self):
        return str(self.email)


class Expert(models.Model):
    """Expert User Model"""
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    hasAcceptedAgreement = models.BooleanField("Has Accepted User Agreement?", default=False)
    profile = models.ForeignKey("ExpertProfile", on_delete=models.CASCADE, blank=True, null=True)
    payment_cards = models.ManyToManyField("BillingCard")


class Influencer(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)


class Customer(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    def __str__(self):
        return str(self.user)

# End of User types

# Profile Information

class ExpertProfile(models.Model):
    """Profile for experts"""
    headline = models.CharField("Headline", max_length=100, blank=True)
    short_bio = models.TextField("Biography", blank=True)
    keywords = models.ManyToManyField("Keyword", related_name="experts", blank=True)
    sectors = models.ManyToManyField("Sector", related_name="experts", blank=True)
    work_history = models.ManyToManyField("WorkHistory", related_name="experts", blank=True)
    skills = models.ManyToManyField("Skill", related_name="experts", blank=True)
    timezone = models.CharField("Timezone", max_length=100, blank=True)
    country = models.CharField("Country", max_length=100, blank=True)
    city = models.CharField("City", max_length=100, blank=True)
    skype_number = models.CharField("Skype", max_length=100, blank=True)
    rate_per_hour = models.PositiveIntegerField()
    is_long_term = models.BooleanField(default=False)
    is_pro_bono = models.BooleanField(default=False)

class Keyword(models.Model):
    """Keywords for experts"""
    keyword = models.CharField(max_length=50)

    def __str__(self):
        return self.keyword


class Sector(models.Model):
    """Sectors for experts"""
    sector = models.CharField(max_length=50)

    def __str__(self):
        return self.sectors

class Skill(models.Model):
    """Model for skills possessed by experts"""
    skill = models.CharField(max_length=50)

class WorkHistory(models.Model):
    """Model for Work History"""
    job_title = models.CharField("Job Title", max_length=30)
    country_work = models.CharField("Work Country", max_length=30)
    city_work = models.CharField("Work City", max_length=30)
    role = models.CharField("Role", max_length=30)
    start_date = models.DateField("Start Date")
    end_date = models.DateField("End Date")

# End of Profile Informatin

# Billing Cards
class BillingCard(models.Model):
    """Model for payment cards"""
    card_number = models.CharField(max_length=50)
    card_name = models.CharField(max_length=100)
    cvc = models.CharField(max_length=10)
    expiry = models.CharField(max_length=5)

    def __str__(self):
        return self.card_name


class Newsletter(models.Model):
    """
    Model for subscribing to our newsletter
    """
    email = models.EmailField()

    def __str__(self):
        return self.email