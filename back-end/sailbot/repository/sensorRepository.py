from sailbot import models

def get_all_wind():
  Wind = models.Wind.objects.all()
  return get_model(models.Wind._meta.fields, Wind, 'Wind', 'sailbot-wind')

def get_all_winch():
    WinchMotor = models.WinchMotor.objects.all()
    return get_model(models.WinchMotor._meta.fields, WinchMotor, 'Winch Motor', 'sailbot-winchmotor')

def get_all_rudder():
    RudderMotor = models.RudderMotor.objects.all()
    return get_model(models.RudderMotor._meta.fields, RudderMotor, 'Rudder Motor', 'sailbot-ruddermotor')

def get_all_gps():
    GPS = models.GPS.objects.all()
    return get_model(models.GPS._meta.fields, GPS, 'GPS', 'sailbot-gps')

def get_all_boomangle():
    BoomAngle = models.BoomAngle.objects.all()
    return get_model(models.BoomAngle._meta.fields, BoomAngle, 'Boom Angle', 'sailbot-boomangle')

def get_all_bms():
    BMS = models.BMS.objects.all()
    return get_model(models.BMS._meta.fields, BMS, 'BMS', 'sailbot-bms')

def get_all_accelerometer():
    Accelerometer = models.Accelerometer.objects.all()
    return get_model(models.Accelerometer._meta.fields, Accelerometer, 'Accelerometer', 'sailbot-accelerometer')

def get_all_ModifiableColumn(sensortype):
    ModifialbeColumn = models.ModifiableColumn.objects.all()

def get_model(attributes, model, sensorName, name):
    return {'Attributes': [f.name for f in attributes],
            'Sensors': model,
            'SensorName': sensorName,
            'Name': name}
