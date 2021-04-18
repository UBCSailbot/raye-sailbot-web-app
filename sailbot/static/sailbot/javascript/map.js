var map;
var mark;
function initMap() {
    let lat = 49.26;
    let lng = -123.24;
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: lat , lng: lng },
      zoom: 11,
    });
    mark = new google.maps.Marker({position:{lat:lat, lng:lng}, map:map});
}

var socket = new WebSocket('ws://localhost:8000/ws/networkTableData/');
socket.onopen = function(e) {
    console.log('Waypoints connection established');
};

socket.onmessage = function(e) {
    let waypoint_data = JSON.parse(e.data);
    if(waypoint_data.sensor_type.localeCompare('waypoints') == 0) {
        map.setCenter({lat: waypoint_data.latitude, lng: waypoint_data.longitude});
        mark.setPosition({lat: waypoint_data.latitude, lng: waypoint_data.longitude});
    }
};

socket.onclose = function(e) {
    console.log('Connection closed');
};

socket.onerror = function(error) {
    alert( `[error] ${error.message}`);
};


