from django.urls import path
from . import views
urlpatterns = [
    path("", views.index, name="index"),
    path("contact_us", views.contact, name="contact"),
    path("about", views.about_us, name="about"),
]