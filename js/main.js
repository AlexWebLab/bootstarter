$(document).ready(function() {

    tuning();
});

var width = $(window).width();
$(window).resize(function() {
    if ($(window).width()==width) return;
    width = $(window).width();
    tuning(); // launched only if there is an horizontal resize
});

$(window).scroll(function() { });

$(window).load(function() { });

function isBreakpoint( alias ) {
    return $('.device-' + alias).is(':visible');
}

function tuning() {
	// responsiveness
	if( isBreakpoint('xs') ) {

	} else {

	}

	// for developers
	$('#window_width').html('['+$(window).width()+'px]');
}
