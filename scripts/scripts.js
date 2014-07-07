


var SLIDER_HEIGHT = 530;
var SLIDER_WIDTH = 1920;

function scrollToClick(e) {
	var hash = this.hash;
	$('html,body').scrollTo(this.hash, this.hash);
	e.preventDefault();
}


var tiles = {};

/* slider instances */
var firstSlider;

var firstPictPerPage = {
        0: 1,
        1: 1,
        2: 1,
        3: 1,
        4: 1
    };


$(document).ready(function () {
    // add slow scroll on link click
    $('#menu').delegate('a', 'click', scrollToClick);

    firstSlider = new Slider('first', SLIDER_WIDTH, SLIDER_HEIGHT, firstPictPerPage, false, true, true, false);

});



