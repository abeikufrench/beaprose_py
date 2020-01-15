from django.urls import path
from django.conf.urls import url

from . import views

app_name = "experts"

urlpatterns = [
    path("expert-participation-agreement/", views.ExpertParticipationAgreement.as_view(), name="expert-agreement"),
    path("expert-profile/", views.ExpertProfile.as_view(), name="expert-profile"),
    path("application-submitted/", views.ApplicationSubmittedView.as_view(), name="application-submitted"),
    url(r"^home/", views.ExpertHomeView.as_view(), name="homepage")
]