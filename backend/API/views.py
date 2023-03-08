from django.shortcuts import render
from google.oauth2 import id_token
from google.auth.transport import requests

# Create your views here.
CLIENT_ID ='1092588329442-4t8irvtfcs27kidlctkeepasdp032tp8.apps.googleusercontent.com'


def index(request):
    return render(request, 'index.html')