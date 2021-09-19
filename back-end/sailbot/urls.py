from django.conf.urls import url
from . import views

urlpatterns = [
    url('', views.home, name='sailbot-home'),
    url('wind/', views.wind, name='sailbot-wind'),
    url('winchmotor/', views.winchmotor, name='sailbot-winchmotor'),
    url('ruddermotor/', views.ruddermotor, name='sailbot-ruddermotor'),
    url('gps/', views.gps, name='sailbot-gps'),
    url('boomangle/', views.boomangle, name='sailbot-boomangle'),
    url('bms/', views.bms, name='sailbot-bms'),
    url('accelerometer/', views.accelerometer, name='sailbot-accelerometer'),
]
