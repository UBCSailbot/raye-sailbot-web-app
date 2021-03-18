import json
from channels.generic.websocket import AsyncWebsocketConsumer
from asgiref.sync import sync_to_async

class NetworkTableData(AsyncWebsocketConsumer):

    async def connect(self):
        self.group_name='network_table'

        await self.channel_layer.group_add(
            self.group_name,
            self.channel_name
        
        )
        await self.accept()

    async def disconnect(self, close_code):
        pass
    
    async def receive(self, text_data):
        await self.channel_layer.group_send(
            self.group_name,
            {
                'type':'sendSensorData',
                'value':text_data,

            }
        )

    async def sendSensorData(self, event):
        await self.send(event['value'])

