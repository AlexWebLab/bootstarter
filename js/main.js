$(document).ready(function() {

    // adding swipe support to carousel
    $(".carousel").swiperight(function() {$(this).carousel('prev');});
    $(".carousel").swipeleft(function() {$(this).carousel('next');});

    // select2
    $('.select2').select2({
		minimumResultsForSearch: Infinity // hide search box
	});

    // dropdown animation
    $('.dropdown').on('show.bs.dropdown', function(e){
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown(200);
    });
    $('.dropdown').on('hide.bs.dropdown', function(e){
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp(100);
    });

    // center modals
    $(modalVerticalCenterClass).on('show.bs.modal', function(e) {
        centerModals($(this));
    });

    // mobile toggle icon
	$('#main_navigation').on('show.bs.collapse', function () {
		$('.icon').addClass('icon--active');
  	});
	$('#main_navigation').on('hide.bs.collapse', function () {
		$('.icon').removeClass('icon--active');
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

var modalVerticalCenterClass = ".centered_modal";
function centerModals($element) {
    var $modals;
    if ($element.length) {
        $modals = $element;
    } else {
        $modals = $(modalVerticalCenterClass + ':visible');
    }
    $modals.each( function(i) {
        var $clone = $(this).clone().css('display', 'block').appendTo('body');
        var top = Math.round(($clone.height() - $clone.find('.popup-container').height()) / 2);
        top = top > 0 ? top : 0;
        $clone.remove();
        $(this).find('.popup-container').css("margin-top", top);
    });
}
