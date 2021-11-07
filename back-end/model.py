"""
Contains the model schemas for each sensor in the network table.      

*** IMPORTANT ***
Ensure that the fields of each model are consistent with the fields listed in the Network Table Listener project in the network table repository.
If there are inconsistencies, then the front-end project will not visualize the data correctly.
*** EXCEPTION: I included the "time_stamp" field on my own, if the network table doesn't provide this data, then the front-end will automatically set the time-stamp to when the data was received.   

"""

from pydantic import BaseModel
from datetime import datetime

class Properities(BaseModel):
    uri: list = []
    startDate: datetime
    endDate: datetime

class Wind(BaseModel):
    sensor_id: str
    sensor_type: str
    speed: float
    direction: int
    timestamp: str

class WinchMotor(BaseModel):
    sensor_id: str
    sensor_type: str
    angle: int
    timestamp: str

class Sailencoder(BaseModel):
    sensor_id: str
    sensor_type: str
    angle: int
    timestamp: str 
    
class RudderMotor(BaseModel):
    sensor_id: str
    sensor_type: str
    angle: float
    timestamp: str

class Accelerometer(BaseModel):
    sensor_id: str
    sensor_type: str
    x_pos: float
    y_pos: float
    z_pos: float
    timestamp: str

class BMS(BaseModel):
    sensor_id: str
    sensor_type: str
    battery_current: int
    battery_voltage: int
    timestamp: str 

class GPS(BaseModel):
    sensor_id: str
    sensor_type: str
    timestamp: str 
    latitude: float
    longitude: float
    ground_speed: float
    true_heading: float
    track_made_good: float
    magnetic_variation: float

class Waypoint(BaseModel):
    sensor_id: str
    sensor_type: str
    latitude: float
    longitude: float
    timestamp: str

class Gyroscope(BaseModel):
    sensor_id: str
    sensor_type: str
    x_velocity: float
    y_velocity: float
    z_velocity: float
    timestamp: str

class AIS(BaseModel):
    sensor_id: str
    sensor_type: str
    m_mmsi: int
    m_navigationStatus: int
    m_rateOfTurn: float
    m_highAccuracy: bool
    m_latitude: float
    m_longitude: float
    m_sog: float
    m_cog: float
    m_trueHeading: int
    m_timeStamp: int
    m_maneuverIndicator: int
    m_timeReceived: int
    m_rateOfTurnValid: bool
    m_sogValid: bool
    m_cogValid: bool
    m_trueHeadingValid: bool
    m_positionValid: bool
    m_timeStampValid: bool
    m_transcieverClass: int
    timestamp: str