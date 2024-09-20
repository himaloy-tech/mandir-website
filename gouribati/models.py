from django.db import models

# Create your models here.
class Contact(models.Model):
    name = models.TextField()
    phone_number = models.TextField(blank=True, null=True)
    message = models.TextField()
    datetime = models.DateTimeField(auto_now_add=True)
    id = models.AutoField(primary_key=True)
    def __str__(self):
        return f"{self.name}" 