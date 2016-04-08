$(document).ready( function()
{
//    dit zijn de variabelen die van groot belang zijn.
    var box1Inhoud = $('#6').detach();
    var box2Inhoud = $('#7').detach();
    var box3Inhoud = $('#8').detach();
    var box4Inhoud = $('#9').detach();
    var box5Inhoud = $('#10').detach();
    
//    dit zijn de functies die de inhoud weergeven.
    
    $('#box1Thumb').on('click', function() {
        vensterObject.opening({inhoud: box1Inhoud, breedte: 500});
    });
    $('#box2Thumb').on('click', function() {
        vensterObject.opening({inhoud: box2Inhoud, breedte: 500});
    });
    $('#box3Thumb').on('click', function() {
        vensterObject.opening({inhoud: box3Inhoud, breedte: 500});
    });
    $('#box4Thumb').on('click', function() {
        vensterObject.opening({inhoud: box4Inhoud, breedte: 500});
    });
    $('#box5Thumb').on('click', function() {
        vensterObject.opening({inhoud: box5Inhoud, breedte: 500});
    });
});

//De opdracht is af.