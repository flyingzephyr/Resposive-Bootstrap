$(document).ready(function() {

    // slick-slider added
    $('.banner-slider').slick({
        arrows: false,
        dots: true,
    });

    $('.test-slider').slick({
        arrows: false,
        dots: true,
    });

    $('.link-slider').slick({
        arrows: true,
        prevArrow: "<i class='fa fa-angle-left'></i>",
        nextArrow: "<i class='fa fa-angle-right'></i>",
        dots: false,
        autoplay: true,
    });

    //  light-box added
    new VenoBox({
        selector: '.video-link',
        spinner: 'wave',
        spinnerColor: '#e23e38',
        overlayClose: false,
    });

    new VenoBox({
        selector: '.light-box',
        spinner: 'wave',
        spinnerColor: '#e23e38',
        overlayClose: true,
    });

    // counter added

    $(".counter").counterUp({
        delay: 20,
        time: 1500,
        offset: 100,
    });

    // mixitup
    var mixer = mixitup('.grid');

    //mixitup active btn with bootstrap
    $('.active').addClass('mixitup-control-active');
    jQuery(function() {
        jQuery('#b-active').click();
    });
});