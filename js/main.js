$(document).ready(function() {

    // adding swipe support to carousel
    $(".carousel").on('swiperight', function() {$(this).carousel('prev');});
    $(".carousel").on('swipeleft', function() {$(this).carousel('next');});

    // select2
    $('.select2').select2({
		minimumResultsForSearch: Infinity // hide search box
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

    $('.entry-content iframe[src*="youtube.com"]').each(function() {
        $(this).attr('src', $(this).attr('src')+'&amp;wmode=transparent&amp;rel=0').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
    });

    tuning();
});

var width = $(window).width();
var resizeTimer;
$(window).on('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
    // Run code here, resizing has "stopped"
    tuning();

    if ($(window).width()==width) return;
    width = $(window).width();
    horizontal_tuning(); // launched only if there is an horizontal resize

    }, 100);
});

$(window).on('scroll', function() { });

$(window).on('load', function() { tuning(); });

function tuning() {
	// responsiveness
	if( isBreakpoint('xs') ) {

	} else {

	}

    var wpadminbar = $('#wpadminbar').outerHeight(true);
    if (!wpadminbar) { wpadminbar = 0; }
    $('.site-main').css( 'min-height', $(window).height()-( $('.site-header').outerHeight(true)+$('.site-footer').outerHeight(true)+wpadminbar ) );

	// for developers
	$('#window_width').html('['+$(window).width()+'px]');
}

function horizontal_tuning() { // launched only if there is an horizontal resize

}

function is_touch(){
    if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
        return true;
    } else {
        return false;
    }
}

function isBreakpoint( alias ) {
    return $('.device-' + alias).is(':visible');
}
