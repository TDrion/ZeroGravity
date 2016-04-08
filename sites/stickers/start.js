$(document).ready( function()
{
//    dit zijn de variabelen die van groot belang zijn.
    var pc1Inhoud = $('#1').detach();
    var pc2Inhoud = $('#2').detach();
    var pc3Inhoud = $('#3').detach();
    var pc4Inhoud = $('#4').detach();
    var pc5Inhoud = $('#5').detach();
    
//    dit zijn de functies die de inhoud weergeven.
    
    $('#pc1Thumb').on('click', function() {
        vensterObject.opening({inhoud: pc1Inhoud, breedte: 500});
    });
    $('#pc2Thumb').on('click', function() {
        vensterObject.opening({inhoud: pc2Inhoud, breedte: 500});
    });
    $('#pc3Thumb').on('click', function() {
        vensterObject.opening({inhoud: pc3Inhoud, breedte: 500});
    });
    $('#pc4Thumb').on('click', function() {
        vensterObject.opening({inhoud: pc4Inhoud, breedte: 500});
    });
    $('#pc5Thumb').on('click', function() {
        vensterObject.opening({inhoud: pc5Inhoud, breedte: 500});
    });
});

//De opdracht is af.