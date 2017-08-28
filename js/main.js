$(document).ready(function() {

    // adding swipe support to carousel
    $(".carousel").swiperight(function() {$(this).carousel('prev');});
    $(".carousel").swipeleft(function() {$(this).carousel('next');});

    // select2
    $('.select2').select2({
		minimumResultsForSearch: Infinity // hide search box
	});

    // center modals
    $(modalVerticalCenterClass).on('show.bs.modal', function(e) {
        centerModals($(this));
    });

    // hover effect for touch devices
    $('.hover_effect').on('mouseenter', function() {
        $(this).addClass('on_hover');
    });
    $('.hover_effect').on('touchstart', function() {
        $(this).addClass('on_hover');
    });
    $('.hover_effect').on('mouseleave', function() {
        $(this).removeClass('on_hover');
    });
    $('.hover_effect').on('touchend', function() {
        $('.hover_effect').removeClass('on_hover');
    });

    // mobile toggle icon
	$('#main_navigation').on('show.bs.collapse', function () {
		$('.icon').addClass('icon--active');
  	});
	$('#main_navigation').on('hide.bs.collapse', function () {
		$('.icon').removeClass('icon--active');
  	});

    // show a specific Bootstrap tab pane based on the URL hashtag
    if ($('.nav-tabs').length > 0) { // if .nav-tabs exists
        var hashtag = window.location.hash;
        if (hashtag!='') {
            $('.nav-tabs > li').removeClass('active');
            $('.nav-tabs > li > a[href="'+hashtag+'"]').parent('li').addClass('active');
            $('.tab-content > div').removeClass('active');
            $(hashtag).addClass('active');
        }
    }

    tuning();
});

var width = $(window).width();
var resizeTimer;
$(window).resize(function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
    // Run code here, resizing has "stopped"
    tuning();

    if ($(window).width()==width) return;
    width = $(window).width();
    horizontal_tuning(); // launched only if there is an horizontal resize

    }, 250);
});

$(window).scroll(function() { });

$(window).load(function() { tuning(); });

function tuning() {
	// responsiveness
	if( isBreakpoint('xs') ) {

	} else {

	}

    $('.site-main').css( 'min-height', $(window).height()-( $('.site-header').outerHeight(true)+$('.site-footer').outerHeight(true)+$('#wpadminbar').outerHeight(true) ) );

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
