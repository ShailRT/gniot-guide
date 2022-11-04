from django.db import models

class Note(models.Model):
    name = models.CharField(max_length=120)
    file = models.FileField(upload_to="notes/")
    date_created = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-date_created']
