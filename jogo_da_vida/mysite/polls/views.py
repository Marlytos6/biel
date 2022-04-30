from django.shortcuts import render
from django.views import generic


# Create your views here.
def index(requisicao):
    return render(requisicao, 'polls/index.html')


#class jogo(generic.DetailView):
 #   model = #classe
  #  template_name = 'polls/jogo.html'

def jogo(requisicao):
    return render(requisicao, 'polls/jogo.html')