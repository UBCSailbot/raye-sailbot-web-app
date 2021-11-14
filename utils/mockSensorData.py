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

def main():
    while True:
        sendMockWindData()
        time.sleep(1)

if __name__ == "__main__":
    main()