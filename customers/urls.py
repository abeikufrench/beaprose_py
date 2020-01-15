from django.urls import path
from django.conf.urls import url
from . import views

app_name = "customers"

urlpatterns = [
    url(r"^home/", views.CustomerHomeView.as_view(), name="homepage")
]