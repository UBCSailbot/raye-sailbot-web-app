from fastapi import FastAPI, HTTPException 
from fastapi.middleware.cors import CORSMiddleware 
from typing import Optional
import json

# App object
app = FastAPI()

from database import (
    fetch_sensor_data,
    add_sensor_data,
    sensorDatabaseDictionary
)

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
    Waypoint
)


origins = ['*']

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials = True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Just a GET request
@app.get("/")
def read_root():
    return "You are looking the UBC Sailbot Backend Server! go to /docs to see more information"

@app.get("/api/models")
async def get_all_model_schemas():
    modelSchemas = {}
    for sensor in sensorDatabaseDictionary:
        modelSchemas[sensor] = sensorDatabaseDictionary[sensor]["model"].schema()
    return modelSchemas 

# The retrieve the data from the database

@app.get("/api/sensors/{sensor_type}")
async def get_sensor_data(sensor_type: str, sensor_uri: Optional[str] = None, time_stamp: Optional[int] = None):
    # TODO: Add the time stamp property to filter data based on a certain time frame. 
    response = await fetch_sensor_data(sensor_type, sensor_uri=sensor_uri)
    if response:
        return response
    raise HTTPException(404, f"There is no sensor data with this type {sensor_type}")

# All methods below are used to send data to the database

@app.post("/api/sensors/wind", response_model=Wind)
async def post_wind_sensor_data(wind_sensor_data: Wind):
    response = await add_sensor_data("wind", wind_sensor_data.dict())
    if response:
        return response
    raise HTTPException(400, f"Something went wrong / Bad Request")

@app.post("/api/sensors/winch_motor", response_model=WinchMotor)
async def post_winch_motor_sensor_data(winch_motor_sensor_data: WinchMotor):
    response = await add_sensor_data("winch_motor", winch_motor_sensor_data.dict())
    if response:
        return response
    raise HTTPException(400, f"Something went wrong / Bad Request")

@app.post("/api/sensors/gps", response_model=GPS)
async def post_gps_sensor_data(gps_sensor_data: GPS):
    response = await add_sensor_data("gps", gps_sensor_data.dict())
    if response:
        return response
    raise HTTPException(400, f"Something went wrong / Bad Request")

@app.post("/api/sensors/bms", response_model=BMS)
async def post_bms_sensor_data(bms_sensor_data: BMS):
    response = await add_sensor_data("bms", bms_sensor_data.dict())
    if response:
        return response
    raise HTTPException(400, f"Something went wrong / Bad Request")

@app.post("/api/sensors/gyroscope", response_model=Gyroscope)
async def post_gyroscope_sensor_data(gyroscope_sensor_data: Gyroscope):
    response = await add_sensor_data("gyroscope", gyroscope_sensor_data.dict())
    if response:
        return response
    raise HTTPException(400, f"Something went wrong / Bad Request")
    
@app.post("/api/sensors/sailencoder", response_model=Sailencoder)
async def post_sailencoder_sensor_data(sailencoder_sensor_data: Sailencoder):
    response = await add_sensor_data("sailencoder", sailencoder_sensor_data.dict())
    if response:
        return response
    raise HTTPException(400, f"Something went wrong / Bad Request")

@app.post("/api/sensors/waypoint", response_model=Waypoint)
async def post_waypoint_sensor_data(waypoint_sensor_data: Waypoint):
    response = await add_sensor_data("waypoint", waypoint_sensor_data.dict())
    if response:
        return response
    raise HTTPException(400, f"Something went wrong / Bad Request")

@app.post("/api/sensors/winch_motor", response_model=WinchMotor)
async def post_winch_motor_sensor_data(winch_motor_sensor_data: WinchMotor):
    response = await add_sensor_data("winch_motor", winch_motor_sensor_data.dict())
    if response:
        return response
    raise HTTPException(400, f"Something went wrong / Bad Request")

@app.post("/api/sensors/rudder_motor", response_model=RudderMotor)
async def post_rudder_motor_sensor_data(rudder_motor_sensor_data: RudderMotor):
    response = await add_sensor_data("rudder_motor", rudder_motor_sensor_data.dict())
    if response:
        return response
    raise HTTPException(400, f"Something went wrong / Bad Request")

@app.post("/api/sensors/accelerometer", response_model=Accelerometer)
async def post_accelerometer_sensor_data(accelerometer_sensor_data: Accelerometer):
    response = await add_sensor_data("accelerometer", accelerometer_sensor_data.dict())
    if response:
        return response
    raise HTTPException(400, f"Something went wrong / Bad Request")

@app.post("/api/sensors/ais", response_model=AIS)
async def post_ais_sensor_data(ais_sensor_data: AIS):
    response = await add_sensor_data("ais", ais_sensor_data.dict())
    if response:
        return response
    raise HTTPException(400, f"Something went wrong / Bad Request")
    
# @app.delete("/api/todo{title}/", response_model=Todo)
# async def delete_todo(title):
#     response = await remove_todo(title)
#     if response:
#         return "Successfully deleted todo item !"
#     raise HTTPException(404, f"There is no TODO item with this title {title}")