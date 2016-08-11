$(document).ready(function() {

    // adding swipe support to carousel
    $(".carousel").swiperight(function() {$(this).carousel('prev');});
    $(".carousel").swipeleft(function() {$(this).carousel('next');});

    // select2
    $('.select2').select2({
		minimumResultsForSearch: Infinity // hide search box
	});

    tuning();
});

var width = $(window).width();
$(window).resize(function() {
    tuning();

    if ($(window).width()==width) return;
    width = $(window).width();
    horizontal_tuning(); // launched only if there is an horizontal resize
});

$(window).scroll(function() { });

$(window).load(function() { tuning(); });

function tuning() {
	// responsiveness
	if( isBreakpoint('xs') ) {

	} else {

	}

	// for developers
	$('#window_width').html('['+$(window).width()+'px]');
}

function horizontal_tuning() { // launched only if there is an horizontal resize

}

function isBreakpoint( alias ) {
    return $('.device-' + alias).is(':visible');
}
