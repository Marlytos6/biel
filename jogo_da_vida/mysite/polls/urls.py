from django.urls import path
from . import views

app_name = 'polls'
urlpatterns = [
    path('', views.index, name='Menu'),
    path('jogo/', views.jogo, name='Jogo'),
]
