from django.db import models

class Accommodation(models.Model):
    title = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    location = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    url = models.URLField(unique=True)
    source = models.CharField(max_length=50)  # e.g., daft.ie, rent.ie
    date_added = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.title} - {self.location}"
