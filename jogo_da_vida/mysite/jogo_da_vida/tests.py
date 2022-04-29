from django.test import TestCase
from .models import *
from .apps import exe


# Create your tests here.
class teste(TestCase):
    def test_exe(self):
        exe()
