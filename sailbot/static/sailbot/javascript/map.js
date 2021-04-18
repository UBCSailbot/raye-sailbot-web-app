let map;
let mark;
function initMap() {
    let lat = 49.26;
    let lng = -123.24;
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: lat , lng: lng },
      zoom: 11,
    });
    mark = new google.maps.Marker({position:{lat:lat, lng:lng}, map:map});
}
/*
var redraw = function(payload) {
  lat = payload.message.lat;
  lng = payload.message.lng;
  map.setCenter({lat:lat, lng:lng, alt:0});
  mark.setPosition({lat:lat, lng:lng, alt:0});
};*/
