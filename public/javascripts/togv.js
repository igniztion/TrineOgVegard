/**
 * hamburger.js
 *
 * Mobile Menu Hamburger
 * =====================
 * A hamburger menu for mobile websites
 *
 * Created by Thomas Zinnbauer YMC AG  |  http://www.ymc.ch
 * Date: 21.05.13
 */

$(document).ready(function () {

    //Open the menu
    $(".hamburger").click(function () {

        $('div.content').css('min-height', $(window).height());

        $('nav').css('opacity', 1);

        //set the width of primary content container -> content should not scale while animating
        var contentWidth = $('div.content').width();

        //set the content with the width that it has originally
        $('div.content').css('width', contentWidth);

        //display a layer to disable clicking and scrolling on the content while menu is shown
        $('div.content-overlay').css('display', 'block');

        //disable all scrolling on mobile devices while menu is shown
        $('div.content-wrapper').bind('touchmove', function (e) {
            e.preventDefault()
        });

        //set margin for the whole container with a $ UI animation
        $("div.content-wrapper").animate({"marginLeft": ["70%", 'easeOutExpo']}, {
            duration: 700
        });

    });

    //close the menu
    $("div.content-overlay").click(function () {

        //enable all scrolling on mobile devices when menu is closed
        $('div.content-wrapper').unbind('touchmove');

        //set margin for the whole container back to original state with a $ UI animation
        $("div.content-wrapper").animate({"marginLeft": ["-1", 'easeOutExpo']}, {
            duration: 700,
            complete: function () {
                $('div.content').css('width', 'auto');
                $('div.content-overlay').css('display', 'none');
                $('nav').css('opacity', 0);
                $('div.content').css('min-height', 'auto');

            }
        });
    });

});
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
//# sourceMappingURL=maps/togv.js.map