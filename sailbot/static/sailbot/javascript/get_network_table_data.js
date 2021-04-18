var socket = new WebSocket('ws://localhost:8000/ws/networkTableData/');
socket.onopen = function(e) {
    console.log('Sensor connection established');
};

socket.onmessage = function(e) {
    let sensor_data = JSON.parse(e.data);
    // All constants for the html values on the website
    let winch_motor_html = document.getElementById("Winch Motor").getElementsByTagName("td");
    let wind_html = document.getElementById("Wind").getElementsByTagName("td");
    let gps_html = document.getElementById("GPS").getElementsByTagName("td");
    let boom_angle_html = document.getElementById("Boom Angle").getElementsByTagName("td");
    let bms_html = document.getElementById("BMS").getElementsByTagName("td");
    let rudder_motor_html = document.getElementById("Rudder Motor").getElementsByTagName("td");
    let accelerometer_html = document.getElementById("Accelerometer").getElementsByTagName("td");

    switch(sensor_data.sensor_type) {
        case '/winch_motor_control_0':
            winch_motor_html[1].innerHTML = sensor_data.current;
            winch_motor_html[2].innerHTML = sensor_data.voltage;
            winch_motor_html[3].innerHTML = sensor_data.temperature;
            winch_motor_html[4].innerHTML = sensor_data.status;
            break;
        case '/winch_motor_control_1':
            winch_motor_html[7].innerHTML = sensor_data.current;
            winch_motor_html[8].innerHTML = sensor_data.voltage;
            winch_motor_html[9].innerHTML = sensor_data.temperature;
            winch_motor_html[10].innerHTML = sensor_data.status;
            break;
        case '/wind_sensor_0':
            wind_html[1].innerHTML = sensor_data.speed;
            wind_html[2].innerHTML = sensor_data.direction;
            wind_html[3].innerHTML = sensor_data.reference;
            wind_html[4].innerHTML = sensor_data.windtemp;
            wind_html[5].innerHTML = sensor_data.current;
            wind_html[6].innerHTML = sensor_data.voltage;
            wind_html[7].innerHTML = sensor_data.temperature;
            wind_html[8].innerHTML = sensor_data.status;
            break;
        case '/wind_sensor_1':
            wind_html[11].innerHTML = sensor_data.speed;
            wind_html[12].innerHTML = sensor_data.direction;
            wind_html[13].innerHTML = sensor_data.reference;
            wind_html[14].innerHTML = sensor_data.windtemp;
            wind_html[15].innerHTML = sensor_data.current;
            wind_html[16].innerHTML = sensor_data.voltage;
            wind_html[17].innerHTML = sensor_data.temperature;
            wind_html[18].innerHTML = sensor_data.status;
            break;
        case '/wind_sensor_2':
            wind_html[21].innerHTML = sensor_data.speed;
            wind_html[22].innerHTML = sensor_data.direction;
            wind_html[23].innerHTML = sensor_data.reference;
            wind_html[24].innerHTML = sensor_data.windtemp;
            wind_html[25].innerHTML = sensor_data.current;
            wind_html[26].innerHTML = sensor_data.voltage;
            wind_html[27].innerHTML = sensor_data.temperature;
            wind_html[28].innerHTML = sensor_data.status;
            break;
        case '/gps_0':
            gps_html[1].innerHTML = sensor_data.quality_indicator;
            gps_html[2].innerHTML = sensor_data.hdop;
            gps_html[3].innerHTML = sensor_data.antenna_altitude;
            gps_html[4].innerHTML = sensor_data.geoidal_separation;
            gps_html[5].innerHTML = sensor_data.utc_timestamp;
            gps_html[6].innerHTML = sensor_data.latitude;
            gps_html[7].innerHTML = sensor_data.longitude;
            gps_html[8].innerHTML = sensor_data.ground_speed;
            gps_html[9].innerHTML = sensor_data.track_made_good;
            gps_html[10].innerHTML = sensor_data.magnetic_variation;
            gps_html[11].innerHTML = sensor_data.voltage;
            break;
        case '/boom_angle_sensor':
            boom_angle_html[1].innerHTML = sensor_data.angle;
            boom_angle_html[2].innerHTML = sensor_data.current;
            boom_angle_html[3].innerHTML = sensor_data.voltage;
            boom_angle_html[4].innerHTML = sensor_data.temperature;
            boom_angle_html[5].innerHTML = sensor_data.status;
            break;
        case '/bms_0':
            bms_html[1].innerHTML = sensor_data.battery_current;
            bms_html[2].innerHTML = sensor_data.battery_temperature;
            bms_html[3].innerHTML = sensor_data.battery_voltage;
            bms_html[4].innerHTML = sensor_data.current;
            bms_html[5].innerHTML = sensor_data.voltage;
            bms_html[6].innerHTML = sensor_data.temperature;
            bms_html[7].innerHTML = sensor_data.status;
            break;
        case '/bms_1':
            bms_html[10].innerHTML = sensor_data.battery_current;
            bms_html[11].innerHTML = sensor_data.battery_temperature;
            bms_html[12].innerHTML = sensor_data.battery_voltage;
            bms_html[13].innerHTML = sensor_data.current;
            bms_html[14].innerHTML = sensor_data.voltage;
            bms_html[15].innerHTML = sensor_data.temperature;
            bms_html[16].innerHTML = sensor_data.status;
            break;
        case '/bms_2':
            bms_html[19].innerHTML = sensor_data.battery_current;
            bms_html[20].innerHTML = sensor_data.battery_temperature;
            bms_html[21].innerHTML = sensor_data.battery_voltage;
            bms_html[22].innerHTML = sensor_data.current;
            bms_html[23].innerHTML = sensor_data.voltage;
            bms_html[24].innerHTML = sensor_data.temperature;
            bms_html[25].innerHTML = sensor_data.status;
            break;
        case '/bms_3':
            bms_html[28].innerHTML = sensor_data.battery_current;
            bms_html[29].innerHTML = sensor_data.battery_temperature;
            bms_html[30].innerHTML = sensor_data.battery_voltage;
            bms_html[31].innerHTML = sensor_data.current;
            bms_html[32].innerHTML = sensor_data.voltage;
            bms_html[33].innerHTML = sensor_data.temperature;
            bms_html[34].innerHTML = sensor_data.status;
            break;
        case '/bms_4':
            bms_html[37].innerHTML = sensor_data.battery_current;
            bms_html[38].innerHTML = sensor_data.battery_temperature;
            bms_html[39].innerHTML = sensor_data.battery_voltage;
            bms_html[40].innerHTML = sensor_data.current;
            bms_html[41].innerHTML = sensor_data.voltage;
            bms_html[42].innerHTML = sensor_data.temperature;
            bms_html[43].innerHTML = sensor_data.status;
            break;
        case '/bms_5':
            bms_html[46].innerHTML = sensor_data.battery_current;
            bms_html[47].innerHTML = sensor_data.battery_temperature;
            bms_html[48].innerHTML = sensor_data.battery_voltage;
            bms_html[49].innerHTML = sensor_data.current;
            bms_html[50].innerHTML = sensor_data.voltage;
            bms_html[51].innerHTML = sensor_data.temperature;
            bms_html[52].innerHTML = sensor_data.status;
            break;
        case '/rudder_motor_control_0':
            rudder_motor_html[1].innerHTML = sensor_data.current;
            rudder_motor_html[2].innerHTML = sensor_data.voltage;
            rudder_motor_html[3].innerHTML = sensor_data.temperature;
            rudder_motor_html[4].innerHTML = sensor_data.status;
            break;
        case '/rudder_motor_control_1':
            rudder_motor_html[7].innerHTML = sensor_data.current;
            rudder_motor_html[8].innerHTML = sensor_data.voltage;
            rudder_motor_html[9].innerHTML = sensor_data.temperature;
            rudder_motor_html[10].innerHTML = sensor_data.status;
            break;
        case '/accelerometer':
            accelerometer_html[1].innerHTML = sensor_data.x_pos;
            accelerometer_html[2].innerHTML = sensor_data.y_pos;
            accelerometer_html[3].innerHTML = sensor_data.z_pos;
            accelerometer_html[4].innerHTML = sensor_data.current;
            accelerometer_html[5].innerHTML = sensor_data.voltage;
            accelerometer_html[6].innerHTML = sensor_data.temperature;
            accelerometer_html[7].innerHTML = sensor_data.status;
            break;
        default:
    }
};

socket.onclose = function(e) {
    console.log('Connection closed');
};

socket.onerror = function(error) {
    alert( `[error] ${error.message}`);
};
