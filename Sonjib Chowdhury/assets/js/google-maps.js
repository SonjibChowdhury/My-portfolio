function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 23.807035, lng: 90.368251};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Dhaka, Bangladesh' // Title Location
    });
}