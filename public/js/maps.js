require("dotenv").config();

let apikey = process.env.MAP_API_KEY;

var platform = new H.service.Platform({
  apikey: apikey,
});

// Obtain the default map types from the platform object:
var defaultLayers = platform.createDefaultLayers();
var service = platform.getSearchService();

let landmark = document.querySelector(".main-heading").textContent;

// Call the geocode method with the geocoding parameters,
// the callback and an error callback function (called if a
// communication error occurs):
service.geocode(
  {
    q: landmark,
  },
  (result) => {
    // Instantiate (and display) a map object:
    var map = new H.Map(
      document.querySelector(".map"),
      defaultLayers.vector.normal.map,
      {
        zoom: 15,
        center: result.items[0].position,
      }
    );
    map.addObject(new H.map.Marker(result.items[0].position));
    var ui = H.ui.UI.createDefault(map, defaultLayers);
  },
  alert
);
