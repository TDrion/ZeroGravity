$(document).ready( function()
{
//    dit zijn de variabelen die van groot belang zijn.
    var EntranceInhoud = $('#Entrance').detach();
    var HallInhoud = $('#Hall').detach();
    var BedroomInhoud = $('#Bedroom').detach();
    var GardenInhoud = $('#Garden').detach();
    
//    dit zijn de functies die de inhoud weergeven.
    
    $('#EntranceThumb').on('click', function() {
        vensterObject.opening({inhoud: EntranceInhoud, breedte: 760});
    });
    $('#HallThumb').on('click', function() {
        vensterObject.opening({inhoud: HallInhoud, breedte: 760});
    });
    $('#BedroomThumb').on('click', function() {
        vensterObject.opening({inhoud: BedroomInhoud, breedte: 760});
    });
    $('#GardenThumb').on('click', function() {
        vensterObject.opening({inhoud: GardenInhoud, breedte: 760});
    });
});

//De opdracht is af.