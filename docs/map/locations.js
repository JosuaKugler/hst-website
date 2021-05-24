var map = L.map('map').setView({lat: 49.43, lon: 8.6759873}, 12);
// add the OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
}).addTo(map);

// show the scale bar on the lower left corner
L.control.scale().addTo(map);

$.getJSON("map/data.json", data => {
    for (key in data) {
        value = data[key];
        console.log(value);
        L.marker({lat: value.lat, lon: value.lon}).bindPopup(value.name).addTo(map);
    }
})


/* Open when someone clicks on the span element */
function openMap() {
    document.getElementById("mapOverlay").style.display = "block";
    map.invalidateSize();
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeMap() {
    document.getElementById("mapOverlay").style.display = "none";
}

// show a marker on the map
//L.marker({lat: 49.40824, lon: 8.6714711}).bindPopup('Calvary Chapel').addTo(map);

