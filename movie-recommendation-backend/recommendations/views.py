from django.shortcuts import render
from rest_framework_simplejwt.views import TokenObtainPairView

class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def add_favorite(request):
    movie_id = request.data.get('movie_id')
    FavoriteMovie.objects.create(user=request.user, movie_id=movie_id)
    return Response({"status": "success"})