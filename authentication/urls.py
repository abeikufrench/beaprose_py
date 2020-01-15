from django.urls import path
from django.conf.urls import url

from . import views

app_name="authentication"

urlpatterns = [
    path("", views.LandingPageView.as_view(), name="landing-page"),
    path("register/", views.RegisterView.as_view(), name="customer-sign-up"),
    path("login/", views.LoginView.as_view(), name="login"),
    path("expert/register/", views.ExpertRegisterView.as_view(), name="expert-sign-up"),
    path("logout/", views.LogoutView.as_view(), name="logout"),
    path("categories/", views.CategoriesView.as_view(), name="categories"),
    path("interest-in-experts/", views.InterestExpertView.as_view(), name="interested-expert"),
    url(r"^activate/(?P<uidb64>[0-9A-Za-z_\-]+)/(?P<token>[0-9A-Za-z]{1,13}-[0-9A-Za-z]{1,20})/$", views.ActivateView.as_view(), name='activate'),
    path("customer/email-verified/", views.EmailVerifiedView.as_view(), name="email-verified"),
    path("customer/phone-verify/<phone_number>/", views.PhoneVerificationView.as_view(), name="phone-verification")
]