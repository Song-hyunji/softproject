from .models import UserRating
from .serializers import UserRatingSerializer
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import APIView
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import render, HttpResponse
from rest_framework import generics
from rest_framework import mixins
from rest_framework.authentication import TokenAuthentication
# from MBTI.modules.db.models import User

from rest_framework import viewsets
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter

#APIView로 Mixins 사용함
# class UserRatingVIEW(generics.GenericAPIView, mixins.ListModelMixin,
#                   mixins.CreateModelMixin):
class UserRatingVIEW(generics.ListAPIView):
    queryset = UserRating.objects.all()
    serializer_class = UserRatingSerializer

    def get_queryset(self):
        qs = super().get_queryset()
        search = self.request.query_params.get('search',"")
        if search:
            qs = qs.filter(email=search)
        return qs


    def post(self, request): #CreateModelMixin을 사용했기 때문에 drf api에 양식이 생김
        serializer = UserRatingSerializer(data=request.data)  # JSON -> Serialize
        if serializer.is_valid():  # 타당성 검토 후 저장
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)
        #return self.create(request)


