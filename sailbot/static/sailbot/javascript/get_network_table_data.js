let socket = new WebSocket('ws://localhost:8000/ws/networkTableData/');
socket.onopen = function(e) {
    alert('Connection established');
};

socket.onmessage = function(e) {
    let sensorData = JSON.parse(e.data);
    let data = document.getElementById("Wind").getElementsByTagName("TD");
    data[1].innerHTML = sensorData.data;
};

socket.onclose = function(e) {
    alert('Connection closed');
};
