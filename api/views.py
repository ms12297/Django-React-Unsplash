from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializers import PhotoSerializer

from .models import Photo

# Create your views here.

@api_view(['GET'])
def apiOverview(request):

    api_urls = {
        'List': '/photo-list/',
        'Detail View': '/photo-detail/<str:pk>/',
        'Create': '/photo-create/',
        'Update': '/photo-update/<str:pk>/',
        'Delete': '/photo-delete/<str:pk>/',
    }

    return Response(api_urls)

@api_view(['GET'])
def photoList(request):
    photos = Photo.objects.all()
    serializer = PhotoSerializer(photos, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def photoDetail(request, pk):
    photos = Photo.objects.get(id=pk)
    serializer = PhotoSerializer(photos, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def photoCreate(request):
    serializer = PhotoSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

@api_view(['POST'])
def photoUpdate(request, pk):
    photo = Photo.objects.get(id=pk)
    serializer = PhotoSerializer(instance=photo, data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

@api_view(['DELETE'])
def photoDelete(request, pk):
    photo = Photo.objects.get(id=pk)
    photo.delete()

    return Response('Item succsesfully deleted!')