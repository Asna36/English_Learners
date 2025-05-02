from django.contrib import admin
from django.urls import path, include
from knox import views as knox_views
from .views import RegisterViewset, LoginViewset, get_logged_in_user

urlpatterns = [
    path('register/', RegisterViewset.as_view({'post': 'create'}), name='register'),
    path('login/', LoginViewset.as_view({'post': 'create'}), name='login'),
    path('logout/', knox_views.LogoutView.as_view(), name='knox_logout'),
    path('logoutall/', knox_views.LogoutAllView.as_view(), name='knox_logoutall'),
    path('get_logged_in_user/', get_logged_in_user, name='get_logged_in_user'),
]
