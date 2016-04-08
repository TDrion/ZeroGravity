$(document).ready( function()
{
//    dit zijn de variabelen die van groot belang zijn.
    var x1Inhoud = $('#11').detach();
    var x2Inhoud = $('#12').detach();
    var x3Inhoud = $('#13').detach();
    var x4Inhoud = $('#14').detach();
    var x5Inhoud = $('#15').detach();
    
//    dit zijn de functies die de inhoud weergeven.
    
    $('#x1Thumb').on('click', function() {
        vensterObject.opening({inhoud: x1Inhoud, breedte: 500});
    });
    $('#x2Thumb').on('click', function() {
        vensterObject.opening({inhoud: x2Inhoud, breedte: 500});
    });
    $('#x3Thumb').on('click', function() {
        vensterObject.opening({inhoud: x3Inhoud, breedte: 500});
    });
    $('#x4Thumb').on('click', function() {
        vensterObject.opening({inhoud: x4Inhoud, breedte: 500});
    });
    $('#x5Thumb').on('click', function() {
        vensterObject.opening({inhoud: x5Inhoud, breedte: 500});
    });
});

//De opdracht is af.