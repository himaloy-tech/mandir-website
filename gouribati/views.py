from django.shortcuts import render, HttpResponseRedirect
# from django.urls import reverse
# from .models import Contact
# # from django.http import JsonResponse
# from django.contrib import messages

# Create your views here.
def index(request):
    return render(request, "index.html")

def contact(request):
    return render(request, "contact_us.html")