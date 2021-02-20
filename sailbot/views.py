from django.shortcuts import render
from django.template.defaulttags import register
from sailbot.repository import sensorRepository
from sailbot.util import nav

def home(request):
    models = []
    models.append(sensorRepository.get_all_winch())
    models.append(sensorRepository.get_all_wind())
    models.append(sensorRepository.get_all_gps())
    models.append(sensorRepository.get_all_boomangle())
    models.append(sensorRepository.get_all_bms())
    models.append(sensorRepository.get_all_rudder())
    models.append(sensorRepository.get_all_accelerometer())
    context = {
        'Models': models,
        'Navbar': nav.get_navbar('home'),
        'PageName': 'Sailbot'
    }
    return render(request, 'sailbot/home.html',context)

def winchmotor(request):
    context={
        'Model': sensorRepository.get_all_winch(),
        'Navbar': nav.get_navbar('sensor')
    }
    return render(request, 'sailbot/sensor.html', context)

def accelerometer(request):
    context={
        'Model': sensorRepository.get_all_accelerometer(),
        'Navbar': nav.get_navbar('sensor')
    }
    return render(request, 'sailbot/sensor.html', context)

def bms(request):
    context={
        'Model': sensorRepository.get_all_bms(),
        'Navbar': nav.get_navbar('sensor')
    }
    return render(request, 'sailbot/sensor.html', context)

def boomangle(request):
    context={
        'Model': sensorRepository.get_all_boomangle(),
        'Navbar': nav.get_navbar('sensor')
    }
    return render(request, 'sailbot/sensor.html', context)

def gps(request):
    context={
        'Model': sensorRepository.get_all_gps(),
        'Navbar': nav.get_navbar('sensor')
    }
    return render(request, 'sailbot/sensor.html', context)

def ruddermotor(request):
    context={
        'Model': sensorRepository.get_all_rudder(),
        'Navbar': nav.get_navbar('sensor')
    }
    return render(request, 'sailbot/sensor.html', context)

def wind(request):
    context={
        'Model': sensorRepository.get_all_wind(),
        'Navbar': nav.get_navbar('sensor')
    }
    return render(request, 'sailbot/sensor.html', context)

@register.filter
def get_item(dictionary, key):
    return getattr(dictionary, key)
