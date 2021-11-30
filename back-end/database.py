from datetime import datetime
import dateutil.parser
from model import (
    Wind, 
    WinchMotor, 
    Accelerometer, 
    AIS, 
    BMS, 
    Gyroscope, 
    GPS, 
    RudderMotor, 
    Sailencoder, 
    Waypoint,
    Query
)

# MongoDB driver
import motor.motor_asyncio

client = motor.motor_asyncio.AsyncIOMotorClient("mongodb+srv://ubcsailbot:raye2021@sensordatacluster.sxfhu.mongodb.net/test")
database = client.SensorData 
# Same thing as a table in SQL

sensorDatabaseDictionary = {
    "wind": {
        "collection": database.wind,
        "model": Wind
    },
    "accelerometer": {
        "collection": database.accelerometer,
        "model": Accelerometer
    },
    "ais": {
        "collection": database.ais,
        "model": AIS
    },
    "winch_motor": {
        "collection": database.winchmotor,
        "model": WinchMotor
    },
    "gps": {
        "collection": database.gps,
        "model": GPS
    },
    "bms": {
        "collection": database.bms,
        "model": BMS
    },
    "gyroscope": {
        "collection": database.gyroscope,
        "model": Gyroscope
    },
    "rudder_motor": {
        "collection": database.ruddermotor,
        "model": RudderMotor
    },
    "sailencoder": {
        "collection": database.sailencoder,
        "model": Sailencoder
    },
    "waypoint": {
        "collection": database.waypoint,
        "model": Waypoint
    },
    "winch_motor": {
        "collection": database.winchmotor,
        "model": WinchMotor
    }
}

async def fetch_sensor_data_from_db(query: Query):
    queried_data = []
    sensor_data = sensorDatabaseDictionary[query.sensor_type]["collection"].find({})
    async for document in sensor_data:
        queried_data.append(sensorDatabaseDictionary[query.sensor_type]["model"](**document))

    filtered_queried_data = []
    for data in queried_data:
        if data.sensor_id in query.sensors and dateutil.parser.isoparse(query.dates[0]).replace(tzinfo=None) < dateutil.parser.isoparse(data.timestamp) and dateutil.parser.isoparse(data.timestamp) < dateutil.parser.isoparse(query.dates[1]).replace(tzinfo=None):
            data_columns = {}
            for column in query.columns:
                data_columns[column] = data[column]
            filtered_queried_data.append(data_columns)

    return filtered_queried_data
    
    
async def add_sensor_data(sensor_type, sensor_data):
    """
    Adds the sensor data to the specified database collection.

    Parameters:
    sensor_type (string): the collection to add the sensor data to.
    sensor_data (json): the data containing the sensor data information.
    """
    document = sensor_data 
    result = await sensorDatabaseDictionary[sensor_type]["collection"].insert_one(document)
    return result
