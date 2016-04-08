var vensterObject = (function() {
    
    var $window = $(window);
    var $Venster = $('<div class="venster"/>');
    var $Inhoud = $('<div class="inhoud"/>');
    var $close = $('<span class="close">&#10005;</span>');

    $Venster.append($Inhoud);
    
    return {
        //centering van de inhoud
        centering: function() {
            var left = Math.max($window.width()-$Inhoud.outerWidth(), 0) / 2;
            var up = Math.max($window.height()-$Inhoud.outerHeight(), 0) / 2;
            $Inhoud.css({links: left, top: up});
        },
        //Het openen van de inhoud
        opening: function(instellingen) {
            $Inhoud.append($close, instellingen.inhoud);
            $Inhoud.css({width: instellingen.breedte+'px' || 'auto',
                               height: instellingen.hoogte+'px' || 'auto'}).on('click', function(e){e.stopPropagation()});
            $Venster.appendTo('body').on('click', vensterObject.closing);
            vensterObject.centering();
            $close.on('click', vensterObject.closing);
            $window.on('resize', vensterObject.centering);
        },
        //Het closing van de inhoud/venster
        closing: function() {
            $Inhoud.empty().off('click', vensterObject.closing);
            $Venster.detach();
            $window.off('resize', vensterObject.centering);
        }
    }
}());