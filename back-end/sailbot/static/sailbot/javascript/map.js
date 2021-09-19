$(document).ready(function() {
  mapboxgl.accessToken = '';
  var mapObject = {
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11'
  };
  var map = new mapboxgl.Map(mapObject);
});
