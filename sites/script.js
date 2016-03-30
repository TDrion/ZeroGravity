var ScrollValue;
var LastPosition = 0;
var NavigationMenu = $('nav');
var MenuHeight = NavigationMenu.outerHeight();

function MoveMenu() 
{
    ScrollValue= $(this).scrollTop();
    if(ScrollValue>LastPosition)
    {
        console.log('Scrolling down.');
        LastPosition=ScrollValue;
        NavigationMenu.css('top', -MenuHeight + 'px');
    }
    else
    {
        console.log('Getting Menu.');
        LastPosition = ScrollValue;
        NavigationMenu.css('top', 0);
    }
}

$(window).on('scroll', MoveMenu);