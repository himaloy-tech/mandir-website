from django.shortcuts import render, HttpResponseRedirect
from django.urls import reverse
from .models import Contact
# # from django.http import JsonResponse
# from django.contrib import messages

# Create your views here.
def index(request):
    return render(request, "index.html")

def contact(request):
    if request.method == "POST":
        name = request.POST.get('person_name')
        message = request.POST.get('query')
        phone_number = request.POST.get('phone_number')
        obj = Contact.objects.create(name=name, message=message, phone_number=phone_number)
        obj.save()
        # messages.success(request, "<strong>Success!</strong> Your Query has been Successfully Submitted")
        return HttpResponseRedirect(reverse("contact"))
    else:
        return render(request, "contact_us.html")