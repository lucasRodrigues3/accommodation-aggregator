from django.contrib import admin
from .models import Accommodation

@admin.register(Accommodation)
class AccommodationAdmin(admin.ModelAdmin):
    list_display = ("title", "location", "price", "source", "date_added")
    search_fields = ("title", "location", "source")
    list_filter = ("source", "date_added")
