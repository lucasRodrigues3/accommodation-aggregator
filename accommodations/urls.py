from rest_framework.routers import DefaultRouter
from .views import AccommodationViewSet

router = DefaultRouter()
router.register(r"accommodations", AccommodationViewSet, basename="accommodation")

urlpatterns = router.urls
