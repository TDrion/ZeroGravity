$(document).ready( function()
{
//    dit zijn de variabelen die van groot belang zijn.
    var c1Inhoud = $('#16').detach();
    var c2Inhoud = $('#17').detach();
    var c3Inhoud = $('#18').detach();
    var c4Inhoud = $('#19').detach();
    var c5Inhoud = $('#20').detach();
    
//    dit zijn de functies die de inhoud weergeven.
    
    $('#c1Thumb').on('click', function() {
        vensterObject.opening({inhoud: c1Inhoud, breedte: 500});
    });
    $('#c2Thumb').on('click', function() {
        vensterObject.opening({inhoud: c2Inhoud, breedte: 500});
    });
    $('#c3Thumb').on('click', function() {
        vensterObject.opening({inhoud: c3Inhoud, breedte: 500});
    });
    $('#c4Thumb').on('click', function() {
        vensterObject.opening({inhoud: c4Inhoud, breedte: 500});
    });
    $('#c5Thumb').on('click', function() {
        vensterObject.opening({inhoud: c5Inhoud, breedte: 500});
    });
});

//De opdracht is af.