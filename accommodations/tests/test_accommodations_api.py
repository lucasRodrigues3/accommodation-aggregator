import pytest
from rest_framework.test import APIClient
from django.urls import reverse
from accommodations.models import Accommodation

@pytest.mark.django_db
class TestAccommodationAPI:

    def setup_method(self):
        self.client = APIClient()

    def test_list_accommodations(self):
        Accommodation.objects.create(
            title="Cozy Studio",
            price=1200.00,
            location="Dublin",
            description="Nice place",
            url="https://example.com/1",
            source="Daft.ie"
        )
        response = self.client.get(reverse("accommodation-list"))
        assert response.status_code == 200
        assert "results" in response.data
        assert len(response.data["results"]) == 1

    def test_create_accommodation_unauthenticated(self):
        data = {
            "title": "Unauthorized Apartment",
            "price": 1000.00,
            "location": "Dublin",
            "description": "Should fail",
            "url": "https://example.com/unauth",
            "source": "Daft.ie",
        }
        response = self.client.post(reverse("accommodation-list"), data)
        assert response.status_code == 401  # Unauthorized
