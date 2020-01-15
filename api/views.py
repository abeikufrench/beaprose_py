from django.shortcuts import render, HttpResponse, Http404
from django.contrib.auth import login, authenticate, logout
from django.views import View
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from rest_framework.views import APIView
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from django.contrib.auth.hashers import check_password

from django.conf import settings
from authentication.models import (
    User, 
    Expert, 
    Newsletter,
    ExpertProfile
)

from . import serializers

import json

# Create your views here.
class LoginView(APIView):
    
    def post(self, request, *args, **kwargs):
        email = request.data["email"]
        password = request.data["password"]
        user = authenticate(email=email, password=password)
        if user is not None:
            login(request, user)
            if user.is_expert:
                return Response({
                    "is_expert": True,
                    "user": user.email
                })
            elif user.is_customer:
                return Response({
                    "is_customer": True,
                    'user': user.email
                })
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)


class CurrentUser(View):

    def get(self, request, *args, **kwargs):
        #   if the user is an expert
        if request.user.is_expert:
            user_info = json.dumps({
                "user": request.user.email, 
                "id": request.user.pk,
                "expert_id": request.user.expert.id,
                "is_expert": True,
                "is_customer": False
            })
        if request.user.is_customer:
            user_info = json.dumps({
                "user": request.user.email, 
                "id": request.user.pk,
                "customer_id": request.user.customer.id,
                "is_customer": True,
                "is_expert": False
            })
        return HttpResponse(user_info, content_type="text/json")


class ChangeEmail(APIView):

    def post(self, request, *args, **kwargs):
        # User = settings.AUTH_USER_MODEL
        # get new and old email
        old_email = request.data["old_email"]
        new_email = request.data["new_email"]
        user = User.objects.get(email=old_email)
        user.email = new_email #  change old email to new email
        user.save()
        user_info = json.dumps({"user": user.email}) # jsonify the user 
        return HttpResponse(user_info, content_type="text/json")

class CheckPassword(APIView):
    """
    View to check the password of a user
    """
    def post(self, request, *args, **kwargs):
        password = request.data["old_password"] # get old password
        email=  request.data["email"]    #   get email of user
        print(email, password)
        user = authenticate(email=email, password=password)
        print(user)
        if user is not None:   #   check password
            print("hello")
            return Response()
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)


class ChangePassword(APIView):
    """"
    View to change the password of a user
    """
    def post(self, request, *args, **kwargs):
        email=  request.data["email"]
        user = User.objects.get(email=email)
        password = request.data["password"]
        try:
            user.set_password(password) # Change the password of the user
            return Response({"password_changed": True})
        except:
            return Response(status=status.HTTP_400_BAD_REQUEST)


class ExpertList(generics.ListAPIView):
    serializer_class= serializers.ExpertSerializer

    
    def get_queryset(self):
        queryset = Expert.objects.all()
        q = self.request.query_params.get("s", None)
        print(self.request.data)
        print(q)
        if q is not None:
            return queryset.filter(user__email__startswith=q)
        return queryset


class ExpertProfileListCreateAPIView(generics.ListCreateAPIView):

    queryset = ExpertProfile.objects.all()
    serializer_class = serializers.ExpertProfileSerializer


class ExpertUpdateAPIView(generics.RetrieveUpdateAPIView):
    queryset = Expert.objects.all()
    serializer_class = serializers.ExpertAllSerializer


class NewsletterCreateView(generics.CreateAPIView):
    queryset = Newsletter.objects.all()
    serializer_class = serializers.NewsletterSerializer
    authentication_classes = []
