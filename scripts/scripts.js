


var SLIDER_HEIGHT = 530;
var SLIDER_WIDTH = 1920;

var stickyNavTop = 0;
var NAV_HEIGHT = 40;

var resize_id;

function scrollToClick(e) {
	var hash = this.hash;
    var y = $(hash).offset().top - NAV_HEIGHT;
    var navCeil = Math.floor($('nav').offset().top);
    if (navCeil <= stickyNavTop)
        y -= NAV_HEIGHT;
	$('html,body').scrollTo(0, y);// this.hash);
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

function stickyNav() {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > stickyNavTop) {
        $('nav').addClass('sticky');
    } else {
        $('nav').removeClass('sticky');
    }
};

$(document).ready(function () {
    // add slow scroll on link click
    $('nav').delegate('a', 'click', scrollToClick);

    firstSlider = new Slider('first', SLIDER_WIDTH, SLIDER_HEIGHT, firstPictPerPage, false, true, true, false);

    stickyNavTop = $('nav').offset().top;
    stickyNav();

    $(window).scroll(function() {
        stickyNav();
    });
});

$( window ).resize(function() {
    clearTimeout(resize_id);
    resize_id = setTimeout(doneResizing, 500);
});

function doneResizing() {
    stickyNavTop = $('nav').offset().top;
    stickyNav();
}


var PLUS = '[+]';
var MINUS = '[-]';

function slideToggle(header, div) {
    $('#' + div).slideToggle();
    if (header.textContent.indexOf(PLUS) >= 0) {
        header.textContent = header.textContent.replace(PLUS, MINUS);
    } else {
        header.textContent = header.textContent.replace(MINUS, PLUS);
    }
}
