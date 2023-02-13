
var path = '../../data/mass_shooting_events_stanford_msa_release_06142016 (5).geojson';

d3.json(path).then(function (data) {
    console.log(data)
    createFeatures(data.features);
});

function createFeatures(eventData) {
    function onEachFeature(feature, layer) {
        layer.bindPopup(`<h1>Location: ${feature.properties['Title']}</h1><hr><p><h3> Total Number of Victims: ${feature.properties['Total Number of Victims']}</h3>`);
    }

    var events = L.geoJSON(eventData, {
        onEachFeature: onEachFeature
    });

    createMap(events);

}

function createMap(events) {
    var street = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    var baseMap = {
        'Street Map': street
    };

    var overlayMaps = {
        Number_of_victims: events
    };

    var map = L.map('bubble-chart', {
        center: [37.09, -95.71],
        zoom: 2,
        layers: [street, events]
    });



    L.control.layers(baseMap, overlayMaps, {
        collapsed: false
    }).addTo(map);




}