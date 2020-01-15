from django.urls import path

from . import views

app_name = "api"

urlpatterns = [
    path("login/", views.LoginView.as_view(), name="login"),
    path("current-user/", views.CurrentUser.as_view(), name="current-user"),
    path("change-email/", views.ChangeEmail.as_view(), name="change-email"),
    path("check-password/", views.CheckPassword.as_view(), name="check-password"),
    path("change-password/", views.ChangePassword.as_view(), name="change-password"),
    path("experts/", views.ExpertList.as_view(), name="experts-list"),
    path("expert-update/<int:pk>/", views.ExpertUpdateAPIView.as_view(), name="experts-update"),
    path("expert-profile/", views.ExpertProfileListCreateAPIView.as_view(), name="expert-profile"),
    path("newsletter/", views.NewsletterCreateView.as_view(), name="newsletter")
]