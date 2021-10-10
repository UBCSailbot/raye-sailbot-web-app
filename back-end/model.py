from pydantic import BaseModel

# TODO: Have the sensors contain a UTC time stamp to keep track of when the data was added to the database.

class WindSensor(BaseModel):
    sensor_id: str
    speed: int
    direction: int

class WinchMotor(BaseModel):
    sensor_id: str
    angle: int

class Sailencoder(BaseModel):
    sensor_id: str
    angle: int
    
class RudderMotor(BaseModel):
    sensor_id: str
    angle: int

class Accelerometer(BaseModel):
    sensor_id: str
    x_pos: int
    y_pos: int
    z_pos: int

class BMS(BaseModel):
    sensor_id: str
    battery_current: int
    battery_voltage: int

class GPS(BaseModel):
    sensor_id: str
    utc_timestamp: str 
    latitude: float
    longitude: float
    ground_speed: int
    track_made_good: int
    magnetic_variation: int

class Waypoint(BaseModel):
    sensor_id: str
    latitude: float
    longitude: float

class Gyroscope(BaseModel):
    sensor_id: str
    x_velocity: float
    y_velocity: float
    z_velocity: float

class AIS(BaseModel):
    sensor_id: str
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