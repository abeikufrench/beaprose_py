from django.shortcuts import render, redirect, reverse
from django.contrib.auth.decorators import user_passes_test, login_required
from django.views import View
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt

from authentication.models import Expert

#   Decorator to prevent unauthorized access
#   @method_decorator([login_required(login_url="/login/"), csrf_exempt, user_passes_test(is_expert_check,login_url="/login/")], name="dispatch")

def is_expert_check(user):
    return user.is_expert

# Create your views here.
@method_decorator([login_required(login_url="/login/"), csrf_exempt, user_passes_test(is_expert_check,login_url="/login/")], name="dispatch")
class ExpertParticipationAgreement(View):
    template_name = "experts/expertsAgreement.html" # template showing expert participation agreement

    def get(self, request, *args, **kwargs):
        if request.GET.get("accepted"): # If the expert has accepted the agreement
            expert = Expert.objects.get(user=request.user) # make the user an expert
            expert.hasAcceptedAgreement = True # user has accepted agreement
            expert.save()
            return redirect(reverse("experts:expert-profile"))
        context = {
            "title": "Expert Participation Agreement | Beaprose"
        }
        return render(request, self.template_name, context=context)


@method_decorator([login_required(login_url="/login/"), csrf_exempt, user_passes_test(is_expert_check,login_url="/login/")], name="dispatch")
class ExpertProfile(View):
    template_name = "experts/expertsProfile.html"

    def get(self, request, *args, **kwargs):
        context = {
            "title": "Expert Profile | Beaprose"
        }

        return render(request, self.template_name, context=context)

@method_decorator([login_required(login_url="/login/"), csrf_exempt, user_passes_test(is_expert_check,login_url="/login/")], name="dispatch")
class ApplicationSubmittedView(View):
    template_name = "experts/applicationSubmitted.html"

    def get(self, request, *args, **kwargs):
        context = {
            "title": "Application Submitted | Beaprose"
        }
        return render(request, self.template_name, context)

@method_decorator([login_required(login_url="/login/"), csrf_exempt, user_passes_test(is_expert_check,login_url="/login/")], name="dispatch")
class ExpertHomeView(View):
    template_name = "experts/expertsPage.html"

    def get(self, request, *args, **kwargs):
        context = {
            "title": "Home -Experts | Beaprose"
        }
        return render(request, self.template_name, context)