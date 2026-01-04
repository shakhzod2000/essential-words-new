# config/urls.py
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.views.generic import RedirectView
from rest_framework.permissions import AllowAny
from lms import views
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
import debug_toolbar


schema_view = get_schema_view(
   openapi.Info(
      title="Essential-Words v1 API",
      default_version='v1',
   ),
   public=True,
   permission_classes=[AllowAny],
)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', RedirectView.as_view(url='/lms/')),
    path('lms/', include('lms.urls')),
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('_debug_/', include(debug_toolbar.urls)),
]
