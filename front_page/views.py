from django.shortcuts import render
from django.http import FileResponse
from portfolio_site.settings import STATICFILES_DIRS as staticdirs

# Create your views here.
def home(request):
    return render(request, 'front_page/index.html')

def resume(request):

    file_location = staticdirs[0] + '\\Resume.pdf'
    response = FileResponse(open(file_location, 'rb'))
    return response
