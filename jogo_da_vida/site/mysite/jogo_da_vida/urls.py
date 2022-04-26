from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='Menu'),
    path('jogo/', views.jogo, name='Jogo'),
]