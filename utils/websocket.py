#!/usr/bin/env python3
import asyncio
import random
from datetime import datetime
import websockets
import json
import requests

async def handler(websocket, path):
    while True:
        wind_sensor_data = {
            "sensor_type": "wind",
            "sensor_id": "wind_sensor_{0}".format(random.randint(1, 3)),
            "speed": random.randint(0, 1000),
            "direction": random.randint(0, 1000),
            'timestamp': datetime.today().replace(microsecond=0).isoformat()
        }
        requests.post('http://127.0.0.1:8000/api/sensors/wind',
                      headers={
                          "Content-Type": "application/json"
                      },
                      data=wind_sensor_data)
        print(wind_sensor_data)
        await websocket.send(json.dumps(wind_sensor_data))

        # winch_sensor_data = {
        #     "sensor_type": "winch_motor",
        #     "sensor_id": random.randint(1, 3),
        #     "angle": random.randint(0, 1000),
        # }
        # print(winch_sensor_data)
        # await websocket.send(json.dumps(winch_sensor_data))

        await asyncio.sleep(3)


start_server = websockets.serve(handler, "127.0.0.1", 8888)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()
