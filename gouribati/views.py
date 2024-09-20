from django.shortcuts import render, HttpResponseRedirect
from .models import Contact
from django.contrib import messages
# from django.http import JsonResponse
# from django.urls import reverse

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
        messages.success(request, "<strong>Success!</strong> Your Query has been Successfully Submitted")
        return HttpResponseRedirect('/contact_us#promo-text')
    else:
        return render(request, "contact_us.html")

def about_us(request):
    return render(request, "about_us.html")