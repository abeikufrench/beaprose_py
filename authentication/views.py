from django.shortcuts import render, redirect, reverse, HttpResponse
from django.http import HttpResponse
from django.contrib.auth import login, authenticate, logout
from django.contrib.auth import get_user_model
from django.contrib.sites.shortcuts import get_current_site
from django.utils.encoding import force_bytes, force_text
from django.utils.http import urlsafe_base64_decode, urlsafe_base64_encode
from django.template.loader import render_to_string
from django.core.mail import EmailMessage
from django.views import View
from django.conf import settings
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from django.contrib import messages

from authy.api import AuthyApiClient

import phonenumbers

from .models import Customer, User
from .tokens import account_activation_token
from .forms import CustomerSignUpForm, ExpertSignUpForm

authy_api = AuthyApiClient(settings.TWILIO_AUTH_KEY)

def send_confirmation_mail(user, current_site, to_email):
    mail_subject = "Activate your account"
    token = account_activation_token.make_token(user)
    # print("Token", token)
    message = render_to_string("acc_active_email.html", {
        "user": "Customer",
        "domain": current_site.domain,
        "uid": urlsafe_base64_encode(force_bytes(user.pk)).decode(),
        "token": token
    })
    email = EmailMessage(
        mail_subject, message, to=[to_email]
    )
    email.send()
    

# Create your views here.
class LandingPageView(View):
    template_name = "landingPage.html"

    def get(self, request, *args, **kwargs):
        context = {
            "title": "Home | Beaprose"
        }
        return render(request, self.template_name, context)

@method_decorator(csrf_exempt, name="dispatch")
class RegisterView(View):
    template_name = "authentication/register.html"

    def get(self, request, *args, **kwargs):
        context = { "title": "Register | Beaprose"}
        return render(request, self.template_name, context)

    def post(self, request, *args, **kwargs):
    
        form = CustomerSignUpForm(request.POST)
        if form.is_valid():
            print("Hello")
            user = form.save()
            user.save()
            current_site = get_current_site(request)
            send_confirmation_mail(user, current_site, form.cleaned_data.get("email"))
            return HttpResponse('Please confirm your email address to complete the registration')
        return redirect(reverse("authentication:customer-sign-up"))

@method_decorator(csrf_exempt, name="dispatch")
class ExpertRegisterView(View):
    template_name = "authentication/expert-register.html"

    def get(self, request, *args, **kwargs):
        context = {
            "title": "Expert Registration | Beaprose"
        }
        return render(request, self.template_name, context)

    def post(self, request, *args, **kwargs):
        form = ExpertSignUpForm(request.POST)
        if form.is_valid():
            user = form.save()
            user.save()
            current_site = get_current_site(request)
            send_confirmation_mail(user, current_site, form.cleaned_data.get("email"))
            return HttpResponse("Please confirm your email address to complete the registration")
        messages.add_message(request, messages.ERROR, "This email is already taken")
        return redirect(reverse("authentication:expert-sign-up"))

@method_decorator(csrf_exempt, name="dispatch")
class LoginView(View):
    template_name = "authentication/login.html"

    def get(self, request, *args, **kwargs):
        context = { "title": "Login | Beaprose"}        
        return render(request, self.template_name, context)

    def post(self, request, *args, **kwargs):
        email = request.POST["email"]
        password = request.POST["password"]
        user = authenticate(email=email, password=password)
        if user is not None:
            login(request, user)
            if user.is_expert:
                return redirect(reverse("experts:homepage"))
            elif user.is_customer:
                return redirect(reverse("customers:homepage"))
        else:
            messages.add_message(request, messages.ERROR, "Incorrect email or password!!!")
            return redirect(reverse("authentication:login"))

class LogoutView(View):

    def get(self, request, *args, **kwargs):
        logout(request) # logout the user
        return redirect(reverse("authentication:login")) # redirect to login page


class ActivateView(View):
    
    def get(self, request, uidb64, token, *args, **kwargs):
        try:
            print("UID", uidb64)
            print("Token", token)
            uid = force_text(urlsafe_base64_decode(uidb64))
            user = User.objects.get(id=uid)
            print("User",user)
        except(TypeError, ValueError, OverflowError) as e:
            print(e)
            user = None
        print("Hello")
        if user is not None and account_activation_token.check_token(user, token):
            user.is_active = True
            user.save()
            login(request, user)
            if user.is_expert:  # redirect to homepage for experts
                return redirect(reverse("experts:expert-agreement"))
            elif user.is_customer:  # redirect to homepage for customers
                return redirect(reverse("customers:homepage"))
        return HttpResponse("Activation link is invalid!")


class EmailVerifiedView(View):
    template_name = "authentication/email_verified.html"

    def get(self, request, *args, **kwargs):
        return render(request, self.template_name)


@method_decorator(csrf_exempt, name="dispatch")
class PhoneVerificationView(View):
    template_name = "authentication/phone_verified.html"

    def get(self, request, *args, **kwargs):
        number = phonenumbers.parse(request.user.phoneNumber)
        authy_api.phones.verification_start(
            number.national_number,
            number.country_code,
            via="sms"
        )
        return render(request, self.template_name)

    def post(self, request, *args, **kwargs):
        code = request.POST["code"]
        number = phonenumbers.parse(request.user.phoneNumber)
        verification = authy_api.phones.verification_check(
            number.national_number,
            number.country_code,
            code
        )

        if verification.ok():
            request.user.phoneNumberVerified = True
            request.user.save()
        else:
            print("Worked")
        return redirect(reverse("customers:homepage"))


class CategoriesView(View):
    template_name = "categories.html"

    def get(self, request, *args, **kwargs):
        context = { "title": "Categories | Beaprose"}
        return render(request, self.template_name, context)


@method_decorator(csrf_exempt, name="dispatch")
class InterestExpertView(View):
    template_name = "interestedExpert.html"

    def get(self, request, *args, **kwargs):
        return render(request, self.template_name)