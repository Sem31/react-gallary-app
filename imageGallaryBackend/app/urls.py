from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from .views import LoginView,UserDetailView,ImageGallaryView

createuser1 = UserDetailView.as_view({
    'get':'list',
    'post':'create'
})

createuser2 = UserDetailView.as_view({
    'get':'retrieve',
    'delete':'destroy'
})

gallaryImage1 = ImageGallaryView.as_view({
    'get':'list',
    'post':'create'
})

gallaryImage2 = ImageGallaryView.as_view({
    'get':'retrieve',
    'put':'update',
    'patch':'partial_update',
    'delete':'destroy'
})

urlpatterns = [

    path('login/', LoginView.as_view(), name='login'),
    path('createuser/',createuser1),
    path('createuser/<int:pk>',createuser2),
    path('gallary/',gallaryImage1),
    path('gallary/<int:pk>',gallaryImage2),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
