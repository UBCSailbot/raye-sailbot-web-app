from django.urls import re_path

from sailbot import consumers

websocket_urlpatterns = [
    re_path('ws/networkTableData/', consumers.NetworkTableData.as_asgi()),
]
