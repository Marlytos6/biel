from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse


# Create your views here.
def index(requisicao):
    # criar template
    return render(requisicao, 'jogo_da_vida/index.html')


def jogo(requisicao):
    # adicionar a tela do jogo baseado na biblioteca python
    context = None
    return render(requisicao, 'jogo_da_vida/jogo.html', context)
