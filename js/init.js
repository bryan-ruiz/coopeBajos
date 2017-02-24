
/**
 * Created by Erwin on 25/09/2016.
 */

$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 5){
            $('#nav').removeClass('transparencia');
            $('#nav').addClass('navbar-fixed');
        }
        else {
        }
    });
    /*
    $('#index-banner').backstretch([
        'img/cataratahd.jpg',
        'img/catarata2.jpg',
        'img/catarata.jpg',
        'img/caida.jpg'
    ],{duration:2000,fade:2000});
*/
    $('.parallax').parallax();
    $('.slider').slider();
    $('.carousel').carousel();
});


(function($){
    $(function(){

        $('.button-collapse').sideNav();
        $('.parallax').parallax();

    }); // end of document ready
})(jQuery); // end of jQuery name space


var audio = document.getElementById('background_audio');

document.getElementById('mute').addEventListener('click', function (e)
{
    e = e || window.event;
    audio.muted = !audio.muted;
    e.preventDefault();
}, false);



var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($animation_elements, function() {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);

        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
            $element.addClass('in-view');
        } else {
            $element.removeClass('in-view');
        }
    });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');

