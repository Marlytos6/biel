from django.shortcuts import render
from django.views import generic


# Create your views here.
def index(requisicao):
    return render(requisicao, 'jogo_da_vida/index.html')


#class jogo(generic.DetailView):
 #   model = #classe
  #  template_name = 'jogo_da_vida/jogo.html'

def jogo(requisicao):
    return render(requisicao, 'jogo_da_vida/jogo.html')