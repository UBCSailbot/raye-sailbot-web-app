from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User

class Accelerometer(models.Model):
    SensorID = models.IntegerField(primary_key=True)
    x_pos = models.FloatField()
    y_pos = models.FloatField()
    z_pos = models.FloatField()
    Current = models.IntegerField()
    Voltage = models.IntegerField()
    Temperature = models.FloatField()
    Status = models.BooleanField()
    UpdatedTime = models.DateTimeField(default=timezone.now)

class BMS(models.Model):
    SensorID = models.IntegerField(primary_key=True)
    BatteryCurrent = models.FloatField()
    BatteryTemperature = models.FloatField()
    BatteryVoltage = models.FloatField()
    Current = models.IntegerField()
    Voltage = models.IntegerField()
    Temperature = models.FloatField()
    Status = models.BooleanField()
    UpdatedTime = models.DateTimeField(default=timezone.now)

class BoomAngle(models.Model):
    SensorID = models.IntegerField(primary_key=True)
    Angle = models.FloatField()
    Current = models.IntegerField()
    Voltage = models.IntegerField()
    Temperature = models.IntegerField()
    Status = models.BooleanField()
    UpdatedTime = models.DateTimeField(default=timezone.now)

class GPS(models.Model):
    SensorID = models.IntegerField(primary_key=True)
    Quality = models.BooleanField()
    HDOP = models.FloatField()
    AntennaAltitude = models.FloatField()
    GeoidalSeparation = models.IntegerField()
    GPRMCTimeStamp = models.DateTimeField()
    Lat = models.FloatField()
    Lon = models.FloatField()
    GroundSpeed = models.FloatField()
    TrackMadeGood = models.FloatField()
    MagneticVariation = models.FloatField()
    Voltage = models.IntegerField()
    Temperature = models.IntegerField()
    Status = models.BooleanField()
    UpdatedTime = models.DateTimeField(default=timezone.now)

class RudderMotor(models.Model):
    SensorID = models.IntegerField(primary_key=True)
    Current = models.IntegerField()
    Voltage = models.IntegerField()
    Temperature = models.IntegerField()
    Status = models.BooleanField()
    UpdatedTime = models.DateTimeField(default=timezone.now)

class WinchMotor(models.Model):
    SensorID = models.IntegerField(primary_key=True)
    Current = models.IntegerField()
    Voltage = models.IntegerField()
    Temperature = models.IntegerField()
    Status = models.BooleanField()
    UpdatedTime = models.DateTimeField(default=timezone.now)

class Wind(models.Model):
    SensorID = models.IntegerField(primary_key=True)
    WindSpeed = models.FloatField()
    WindDirection = models.FloatField()
    WindReference = models.IntegerField()
    WindTemperature = models.FloatField()
    Current = models.IntegerField()
    Voltage = models.IntegerField()
    Temperature = models.IntegerField()
    Status = models.CharField(max_length=100)
    UpdatedTime = models.DateTimeField(default=timezone.now)

class ModifiableColumn(models.Model):
    class Meta:
        unique_together = (('SensorType', 'Column'),)
    SensorType = models.CharField(max_length=100)
    Column = models.CharField(max_length=100)
