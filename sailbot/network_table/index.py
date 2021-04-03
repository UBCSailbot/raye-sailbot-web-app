from Connection import ConnectionError
from Connection import Connection
from Help import Help
import generated_python.Value_pb2 as Value_pb2
import websocket, json, random
import pdb

"""
Connects the web-app server to the network table and retrieves all the data to be displayed real-time.

"""

class WebAppConnection:
    def __init__(self, ws_connection):
        web_socket = websocket.WebSocket()
        web_socket.connect(ws_connection)
        self.ws = web_socket

    def getWindSensorData(self, node, uri):
        wind_sensor_data = json.dumps(
            {
                'sensor_type': uri,
                'speed': node.children['iimwv'].children['wind_speed'].value.int_data,
                'direction': node.children['iimwv'].children['wind_direction'].value.int_data,
                'reference': node.children['iimwv'].children['wind_reference'].value.int_data,
                'windtemp': node.children['iimwv'].children['wind_temperature'].value.int_data,
                'current': node.children['uccm'].children['current'].value.int_data,
                'voltage': node.children['uccm'].children['voltage'].value.int_data,
                'temperature': node.children['uccm'].children['temperature'].value.int_data,
                'status': node.children['uccm'].children['status'].value.string_data
            }
        )
        print(wind_sensor_data)
        self.ws.send(wind_sensor_data)

    def getWinchMotorData(self, node, uri):
        wind_sensor_data = json.dumps(
            {
                'sensor_type': uri,
                'current': node.children['uccm'].children['current'].value.int_data,
                'voltage': node.children['uccm'].children['voltage'].value.int_data,
                'temperature': node.children['uccm'].children['temperature'].value.int_data,
                'status': node.children['uccm'].children['status'].value.string_data
            }
        )
        print(wind_sensor_data)
        self.ws.send(wind_sensor_data)

    def getBoomAngleData(self, node, uri):
        wind_sensor_data = json.dumps(
            {
                'sensor_type': uri,
                'angle': node.children['boom_angle_sensor'].children['angle'].value.int_data,
                'current': node.children['uccm'].children['current'].value.int_data,
                'voltage': node.children['uccm'].children['voltage'].value.int_data,
                'temperature': node.children['uccm'].children['temperature'].value.int_data,
                'status': node.children['uccm'].children['status'].value.string_data
            }
        )
        print(wind_sensor_data)
        self.ws.send(wind_sensor_data)

    def getRudderMotorData(self, node, uri):
        wind_sensor_data = json.dumps(
            {
                'sensor_type': uri,
                'current': node.children['uccm'].children['current'].value.int_data,
                'voltage': node.children['uccm'].children['voltage'].value.int_data,
                'temperature': node.children['uccm'].children['temperature'].value.int_data,
                'status': node.children['uccm'].children['status'].value.string_data
            }
        )
        print(wind_sensor_data)
        self.ws.send(wind_sensor_data)

    def getAccelerometerData(self, node, uri):
        wind_sensor_data = json.dumps(
            {
                'sensor_type': uri,
                'x_pos': node.children['boat_orientation_data'].children['x_axis_acceleration'].value.int_data,
                'y_pos': node.children['boat_orientation_data'].children['y_axis_acceleration'].value.int_data,
                'z_pos': node.children['boat_orientation_data'].children['z_axis_acceleration'].value.int_data,
                'current': node.children['uccm'].children['current'].value.int_data,
                'voltage': node.children['uccm'].children['voltage'].value.int_data,
                'temperature': node.children['uccm'].children['temperature'].value.int_data,
                'status': node.children['uccm'].children['status'].value.string_data
            }
        )
        print(wind_sensor_data)
        self.ws.send(wind_sensor_data)

    def getBMSData(self, node, uri):
        wind_sensor_data = json.dumps(
            {
                'sensor_type': uri,
                'battery_current': node.children['battery_pack_data'].children['current'].value.int_data,
                'battery_voltage': node.children['battery_pack_data'].children['total_voltage'].value.int_data,
                'battery_temperature': node.children['battery_pack_data'].children['temperature'].value.int_data,
                'current': node.children['uccm'].children['current'].value.int_data,
                'voltage': node.children['uccm'].children['total_voltage'].value.int_data,
                'temperature': node.children['uccm'].children['temperature'].value.int_data,
                'status': node.children['uccm'].children['status'].value.string_data
            }
        )
        print(wind_sensor_data)
        self.ws.send(wind_sensor_data)

    def getGPSData(self, node, uri):
        wind_sensor_data = json.dumps(
            {
                'sensor_type': uri,
                'utc_timestamp': node.children['gprmc'].children['utc_timestamp'].value.string_data,
                'latitude': node.children['gprmc'].children['latitude'].value.float_data,
                'longitude': node.children['gprmc'].children['longitude'].value.float_data,
                'latitude_loc': node.children['gprmc'].children['latitude_loc'].value.bool_data,
                'longitude_loc': node.children['gprmc'].children['longitude_loc'].value.bool_data,
                'ground_speed': node.children['gprmc'].children['ground_speed'].value.int_data,
                'track_made_good': node.children['gprmc'].children['track_made_good'].value.int_data,
                'magnetic_variation': node.children['gprmc'].children['magnetic_variation'].value.int_data,
                'magnetic_variation_sense': node.children['gprmc'].children['magnetic_variation_sense'].value.bool_data,
                'quality_indicator': node.children['gpgga'].children['quality_indicator'].value.int_data,
                'hdop': node.children['gpgga'].children['hdop'].value.int_data,
                'antenna_altitude': node.children['gpgga'].children['antenna_altitude'].value.int_data,
                'geoidal_separation': node.children['gpgga'].children['geoidal_separation'].value.int_data,
                'current': node.children['uccm'].children['current'].value.int_data,
                'voltage': node.children['uccm'].children['voltage'].value.int_data,
                'temperature': node.children['uccm'].children['temperature'].value.int_data,
                'status': node.children['uccm'].children['status'].value.string_data
            }
        )
        print(wind_sensor_data)
        self.ws.send(wind_sensor_data)

if __name__ == '__main__':
    web_app = WebAppConnection('ws://localhost:8000/ws/networkTableData/')
    nt_connection = Connection()
    print("Connecting to Network Table...")
    nt_connection.Connect()

    # Subscribes to all the sensors in the network table
    nt_connection.Subscribe('/wind_sensor_0', web_app.getWindSensorData)
    nt_connection.Subscribe('/wind_sensor_1', web_app.getWindSensorData)
    nt_connection.Subscribe('/wind_sensor_2', web_app.getWindSensorData)

    for i in range(6):
        nt_connection.Subscribe('/bms_{0}'.format(i), web_app.getGPSData)
    for i in range(2):
        nt_connection.Subscribe('/rudder_motor_control_{0}'.format(i), web_app.getRudderMotorData)
        nt_connection.Subscribe('/winch_motor_control_{0}'.format(i), web_app.getWinchMotorData)
        nt_connection.Subscribe('/gps_{0}'.format(i), web_app.getGPSData)

    nt_connection.Subscribe('/boom_angle_sensor', web_app.getWindSensorData)

    # Polls the data from the network table
    print("Polling data from Network Table...")
    nt_connection.manageSocket()
