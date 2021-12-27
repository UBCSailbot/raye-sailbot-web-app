from random import randint, uniform
from datetime import datetime
import requests
import json
import time

back_end_connection = "http://localhost:8000/api/sensors"

def sendMockWindData():
    wind_sensor_data = json.dumps(
        {
            "sensor_id": "wind_sensor_{0}".format(randint(1, 3)),
            "sensor_type": "wind",
            "speed": uniform(1, 50),
            "direction": randint(1, 50),
            'timestamp': datetime.today().replace(microsecond=0).isoformat()
        }
    )
    print(wind_sensor_data)
    requests.post(back_end_connection + "/wind", data=wind_sensor_data)

def sendMockAccelerometerData():
    accelerometer_data = json.dumps(
        {
            "sensor_id": "accelerometer",
            "sensor_type": "accelerometer",
            "x_pos": uniform(1, 50),
            "y_pos": uniform(1, 50),
            "z_pos": uniform(1, 50),
            'timestamp': datetime.today().replace(microsecond=0).isoformat()
        }
    )
    print(accelerometer_data)
    requests.post(back_end_connection + "/accelerometer", data=accelerometer_data)

def main():
    while True:
        sendMockWindData()
        sendMockAccelerometerData()
        time.sleep(1)

if __name__ == "__main__":
    main()
