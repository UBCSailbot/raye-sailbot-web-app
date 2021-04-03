var socket = new WebSocket('ws://localhost:8000/ws/networkTableData/');
socket.onopen = function(e) {
    console.log('Connection established');
};

socket.onmessage = function(e) {
    let sensor_data = JSON.parse(e.data);
    let wind_html = document.getElementById("Wind").getElementsByTagName("TD");
    let gps_html = document.getElementById("GPS").getElementsByTagName("TD");
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
            gps_html[6].innerHTML = sensor_data.latitude;
            gps_html[7].innerHTML = sensor_data.longitude;
        default:
            break;
    }
};

socket.onclose = function(e) {
    console.log('Connection closed');
};

socket.onerror = function(error) {
    alert( `[error] ${error.message}`);
};
