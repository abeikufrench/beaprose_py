from django.shortcuts import render
from django.views import View
from django.contrib.auth.decorators import user_passes_test, login_required
from django.views.decorators.csrf import csrf_exempt

from django.utils.decorators import method_decorator

def is_customer_check(user):
    return user.is_customer

# Create your views here.
@method_decorator([login_required(login_url="/login/"), csrf_exempt, user_passes_test(is_customer_check,login_url="/login/")], name="dispatch")
class CustomerHomeView(View):
    template_name = "customers/customersPage.html"

    def get(self, request, *args, **kwargs):
        context = {
            "title": "Home - Customer | Beaprose"
        }
        return render(request, self.template_name, context)