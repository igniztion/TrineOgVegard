function initBoth(){
    initMap(true);
}

function initMap(showchurch) {
    var centerPos = {lat: 58.1894, lng: 8.1006};
    var tveitKirkePos = {lat: 58.228283, lng: 8.121387};
    var ernstPos = { lat: 58.144552, lng: 7.992945};
    var map = new google.maps.Map(document.getElementById('gmap'), {
        center: centerPos,
        zoom: 11
    });
    
    if(showchurch){
        var tveitKirkePlace = {
            location: tveitKirkePos,
            placeId: 'ChIJc3II1cEGOEYRpV2tYBe4ZqE'
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
        
            
        var tveitInfoWindow = new google.maps.InfoWindow({
            content: '<p><strong>Vielse: Tveit Kirke</strong</p><p>Kl. 13:00 <br/><a href="#church">Mer info</a></p>'
        });
        
        marker.addListener('click', function() {
            tveitInfoWindow.open(map, marker);
        });
    }
    
    var ernstPlace = {
        location: ernstPos,
        placeId: 'ChIJxcj6KV4COEYRzKoygNAgmMI'
    };
    
    var ernstMarker = new google.maps.Marker({
        place: ernstPlace,
        attribution: tveitKirkeAttr,
        map: map,
        title: 'Clarion Ernst Hotel'
    });
   
    var ernstInfoWindow = new google.maps.InfoWindow({
        content: '<p><strong>Fest: Clarion Ernst Hotel</strong></p><p><a href="#hotel">Mer info</a></p>'
    });

    ernstMarker.addListener('click', function(){
        ernstInfoWindow.open(map, ernstMarker)
    })
}

$(function(){
    $('#rsvp-button').on('click', function(){
        
        var name = $('input[name="name"]').val();
        if(name && name !== '' && name.length > 2){
            $('.rsvp form').submit();
        } else {
            $('input[name="name"]').addClass('error');
        }
    });
})