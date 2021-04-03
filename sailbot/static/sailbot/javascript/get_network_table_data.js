var socket = new WebSocket('ws://localhost:8000/ws/networkTableData/');
socket.onopen = function(e) {
    console.log('Connection established');
};

socket.onmessage = function(e) {
    console.log("test");
    let sensor_data = JSON.parse(e.data);
    if(sensor_data.sensor_type == '/wind_sensor_0') {
        let wind_0_html = document.getElementById("Wind").getElementsByTagName("TD");
        wind_0_html[1].innerHTML = sensor_data.speed;
        wind_0_html[2].innerHTML = sensor_data.direction;
        wind_0_html[3].innerHTML = sensor_data.reference;
        wind_0_html[4].innerHTML = sensor_data.windtemp;
        wind_0_html[5].innerHTML = sensor_data.current;
        wind_0_html[6].innerHTML = sensor_data.voltage;
        wind_0_html[7].innerHTML = sensor_data.temperature;
        wind_0_html[8].innerHTML = sensor_data.status;
    }
};

socket.onclose = function(e) {
    console.log('Connection closed');
};

socket.onerror = function(error) {
    alert( `[error] ${error.message}`);
};
