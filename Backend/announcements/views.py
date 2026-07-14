# from django.shortcuts import render

# # Create your views here.
# from rest_framework import viewsets
# from rest_framework.permissions import IsAuthenticatedOrReadOnly

# from .models import Announcement
# from .serializers import AnnouncementSerializer

# class AnnouncementViewSet(viewsets.ModelViewSet):
#     queryset = Announcement.objects.all()
#     serializer_class = AnnouncementSerializer
#     permission_classes = [IsAuthenticatedOrReadOnly]


# #     This means:

# # Anyone can view announcements.
# # Only authenticated users (the admin) can add, edit, or delete them.

from rest_framework import viewsets
from .models import Announcement
from .serializers import AnnouncementSerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly


class AnnouncementViewSet(viewsets.ModelViewSet):
    queryset = Announcement.objects.all().order_by("-created_at")
    serializer_class = AnnouncementSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]