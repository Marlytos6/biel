from django.apps import AppConfig
from jogo_da_vida.teste_logica import model, view
import tkinter as tk


class JogoDaVidaConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'jogo_da_vida'


def exe():
    view.setup()
    view.update()
    tk.mainloop()
