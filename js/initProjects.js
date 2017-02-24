/**
 * Created by Erwin on 02/10/2016.
 */

$(document).ready(function(){
    $('#img-container').backstretch(
        [
            'img/volcan/volcan.jpg',
            'img/volcan/volcan1.jpg',
            'img/volcan/volcan2.jpg',
            'img/volcan/volcan3.jpg'

        ],{duration:2000,fade:2000}
    );
    $('#img-container1').backstretch(
        [
            'img/juanCB/jcb.jpg',
            'img/juanCB/jcb1.jpg',
            'img/juanCB/jcb2.jpg',
            'img/juanCB/jcb3.jpg'

        ],{duration:2000,fade:2000}
    );
    $('#img-container2').backstretch(
        [
            'img/volcan/volcan.jpg',
            'img/volcan/volcan1.jpg',
            'img/volcan/volcan2.jpg',
            'img/volcan/volcan3.jpg'

        ],{duration:2000,fade:2000}
    );




});
(function($){
    $(function(){

        $('.button-collapse').sideNav();
        $('.parallax').parallax();

    }); // end of document ready
})(jQuery); // end of jQue