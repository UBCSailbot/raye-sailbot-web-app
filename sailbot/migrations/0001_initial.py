# Generated by Django 2.2.5 on 2019-09-28 01:08

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Accelerometer',
            fields=[
                ('SensorID', models.IntegerField(primary_key=True, serialize=False)),
                ('x_pos', models.FloatField()),
                ('y_pos', models.FloatField()),
                ('z_pos', models.FloatField()),
                ('Current', models.IntegerField()),
                ('Voltage', models.IntegerField()),
                ('Temperature', models.FloatField()),
                ('Status', models.BooleanField()),
                ('UpdatedTime', models.DateTimeField(default=django.utils.timezone.now)),
            ],
        ),
        migrations.CreateModel(
            name='BMS',
            fields=[
                ('SensorID', models.IntegerField(primary_key=True, serialize=False)),
                ('BatteryCurrent', models.FloatField()),
                ('BatteryTemperature', models.FloatField()),
                ('BatteryVoltage', models.FloatField()),
                ('Current', models.IntegerField()),
                ('Voltage', models.IntegerField()),
                ('Temperature', models.FloatField()),
                ('Status', models.BooleanField()),
                ('UpdatedTime', models.DateTimeField(default=django.utils.timezone.now)),
            ],
        ),
        migrations.CreateModel(
            name='BoomAngle',
            fields=[
                ('SensorID', models.IntegerField(primary_key=True, serialize=False)),
                ('Angle', models.FloatField()),
                ('Current', models.IntegerField()),
                ('Voltage', models.IntegerField()),
                ('Temperature', models.IntegerField()),
                ('Status', models.BooleanField()),
                ('UpdatedTime', models.DateTimeField(default=django.utils.timezone.now)),
            ],
        ),
        migrations.CreateModel(
            name='GPS',
            fields=[
                ('SensorID', models.IntegerField(primary_key=True, serialize=False)),
                ('Quality', models.BooleanField()),
                ('HDOP', models.FloatField()),
                ('AntennaAltitude', models.FloatField()),
                ('GeoidalSeparation', models.IntegerField()),
                ('GPRMCTimeStamp', models.DateTimeField()),
                ('Lat', models.FloatField()),
                ('Lon', models.FloatField()),
                ('GroundSpeed', models.FloatField()),
                ('TrackMadeGood', models.FloatField()),
                ('MagneticVariation', models.FloatField()),
                ('Voltage', models.IntegerField()),
                ('Temperature', models.IntegerField()),
                ('Status', models.BooleanField()),
                ('UpdatedTime', models.DateTimeField(default=django.utils.timezone.now)),
            ],
        ),
        migrations.CreateModel(
            name='RudderMotor',
            fields=[
                ('SensorID', models.IntegerField(primary_key=True, serialize=False)),
                ('Current', models.IntegerField()),
                ('Voltage', models.IntegerField()),
                ('Temperature', models.IntegerField()),
                ('Status', models.BooleanField()),
                ('UpdatedTime', models.DateTimeField(default=django.utils.timezone.now)),
            ],
        ),
        migrations.CreateModel(
            name='WinchMotor',
            fields=[
                ('SensorID', models.IntegerField(primary_key=True, serialize=False)),
                ('Current', models.IntegerField()),
                ('Voltage', models.IntegerField()),
                ('Temperature', models.IntegerField()),
                ('Status', models.BooleanField()),
                ('UpdatedTime', models.DateTimeField(default=django.utils.timezone.now)),
            ],
        ),
        migrations.CreateModel(
            name='Wind',
            fields=[
                ('SensorID', models.IntegerField(primary_key=True, serialize=False)),
                ('WindSpeed', models.FloatField()),
                ('WindDirection', models.CharField(max_length=100)),
                ('WindReference', models.BooleanField()),
                ('WindTemperature', models.FloatField()),
                ('Current', models.IntegerField()),
                ('Voltage', models.IntegerField()),
                ('Temperature', models.IntegerField()),
                ('Status', models.BooleanField()),
                ('UpdatedTime', models.DateTimeField(default=django.utils.timezone.now)),
            ],
        ),
        migrations.CreateModel(
            name='ModifiableColumn',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('SensorType', models.CharField(max_length=100)),
                ('Column', models.CharField(max_length=100)),
            ],
            options={
                'unique_together': {('SensorType', 'Column')},
            },
        ),
    ]
