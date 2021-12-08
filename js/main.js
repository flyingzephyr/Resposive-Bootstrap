$(document).ready(function() {
    $('.banner-slider').slick({
        arrows: false,
        dots: true,
    });

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
});