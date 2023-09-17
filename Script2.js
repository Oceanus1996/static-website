// celebration map
//reference from url(https://leafletjs.com/examples.html)
var map = L.map('map').setView([0, 0], 2);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
}).addTo(map);

function searchCity() {
    var city = document.getElementById('cityInput').value;
    var name = document.getElementById('nameinput').value;

    fetch(`https://nominatim.openstreetmap.org/search?q=${city}&format=json&addressdetails=1`)
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                var lat = parseFloat(data[0].lat);
                var lon = parseFloat(data[0].lon);

                L.marker([lat, lon]).addTo(map);
                map.setView([lat, lon], 10);L.marker([lat, lon]).bindPopup("Congratulations!" + name + ", You add your own mark!").addTo(map);
            } else {
                alert('No result found!');
            }
        });
}
