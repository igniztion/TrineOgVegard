$(function(){
    $('#rsvp-button').on('click', function(){
        
        var name = $('input[name="name"]').val();
        if(name && name !== '' && name.length > 2){
            $('.rsvp form').submit();
        } else {
            $('input[name="name"]').addClass('error');
        }
    });
});