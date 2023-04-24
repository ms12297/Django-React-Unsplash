from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.apiOverview, name="api-overview"),
    path('photo-list/', views.photoList, name="photo-list"),
    path('photo-detail/<str:pk>/', views.photoDetail, name="photo-detail"),
    path('photo-create/', views.photoCreate, name="photo-create"),
    path('photo-update/<str:pk>/', views.photoUpdate, name="photo-update"),
    path('photo-delete/<str:pk>/', views.photoDelete, name="photo-delete"),
]