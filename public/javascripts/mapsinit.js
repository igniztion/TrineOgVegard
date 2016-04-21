function initMap() {
    var centerPos = {lat: 58.1894, lng: 8.1006};
    var tveitKirkePos = {lat: 58.228283, lng: 8.121387};
    var ernstPos = { lat: 58.144552, lng: 7.992945};
    var map = new google.maps.Map(document.getElementById('gmap'), {
        center: centerPos,
        zoom: 11
    });
    
    var tveitKirkePlace = {
        location: tveitKirkePos,
        placeId: 'ChIJc3II1cEGOEYRpV2tYBe4ZqE'
    };
    
    var ernstPlace = {
        location: ernstPos,
        placeId: 'ChIJxcj6KV4COEYRzKoygNAgmMI'
    };
    
    var tveitKirkeAttr = {
        source: 'Trine & Vegard',
        webUrl: 'http://trineogvegard.com'
    };
    
    var marker = new google.maps.Marker({
        place: tveitKirkePlace,
        attribution: tveitKirkeAttr,
        map: map,
        title: 'Tveit kirke',
    });
    
    var ernstMarker = new google.maps.Marker({
        place: ernstPlace,
        attribution: tveitKirkeAttr,
        map: map,
        title: 'Clarion Ernst Hotel'
    });
    
    var tveitInfoWindow = new google.maps.InfoWindow({
        content: '<p style="font-size:20px;color:black;">Tveit Kirke</p><p><a href="#church">Info</a></p>'
    });
    
    var ernstInfoWindow = new google.maps.InfoWindow({
        content: '<p style="font-size:20px;color:black;">Clarion Ernst Hotel</p><p><a href="#hotel">Info</a></p>'
    });

        // Opens the InfoWindow when marker is clicked.
    marker.addListener('click', function() {
        tveitInfoWindow.open(map, marker);
    });
    ernstMarker.addListener('click', function(){
        ernstInfoWindow.open(map, ernstMarker)
    })
}
//# sourceMappingURL=maps/mapsinit.js.map