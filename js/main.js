$(document).ready(function () {
    'use strict';

    // Ripple Effect
    $('.slider').ripples({
        dropRadius: 15,
        perturbance: 0.01,
    });

    // Auto typing Effect
    var typed = new Typed('.text', {
        strings: [
            "<strong>I Love </strong><strong class='primary'>Coding</strong>",
            "<strong>AND </strong><strong class='primary'>Developing</strong>",
        ],
        smartBackspace: true,
        backDelay: 1000,
        loop: true,
    });

    // Sticky Navbar
    $(window).scroll(function () {
        var top = $(window).scrollTop();
        if (top >= 60) {
            $('nav').addClass('secondary');
        } else if ($('nav').hasClass('secondary')) {
            $('nav').removeClass('secondary');
        }
    });

    // Magnific Popup
    $('.work').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true,
        },
    });

    // Owl Carousel
    $('.owl-carousel').owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 750,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 2,
            },
            768: {
                items: 3,
            },
        },
    });

    // Counter
    jQuery(document).ready(function ($) {
        $('.counter').counterUp({
            delay: 10,
            time: 1000,
        });
    });

    // Smooth Scroll with Animation
    $('a.smooth-scroll').click(function (event) {
        event.preventDefault();
        var section = $(this).attr('href');

        $('html, body').animate(
            {
                scrollTop: $(section).offset().top - -2,
            },
            1250,
            'easeInOutExpo'
        );
    });

    // Reveal Animation on Scroll
    new WOW().init();
});
