mapboxgl.accessToken = mapToken;

// Parse the coordinates string safely
let coords = coordinates;
if (typeof coords === 'string') {
  try {
    coords = JSON.parse(coords);
  } catch (e) {
    coords = [0, 0]; // fallback
  }
}

// Initialize the map
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v12',
  center: coords,
  zoom: 9,
});

// Create a popup with custom content
const popup = new mapboxgl.Popup({ offset: 25 }).setText("📍 Exact location will be visible after booking");

// Create the marker and bind popup
new mapboxgl.Marker({ color: "red" })
  .setLngLat(coords)
  .setPopup(popup)
  .addTo(map);
