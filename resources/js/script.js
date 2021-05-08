$(function () {
    //use strict

    //menubar js

    var menuOfset = $('#custom_nav').offset().top;
    $(window).on('scroll', function () {
        var scrillTop = $(window).scrollTop()

        if (scrillTop > menuOfset) {
            $('#custom_nav').addClass('menuFix');
        } else {
            $('#custom_nav').removeClass('menuFix');
        }

        // backtop  

        if (scrillTop > 200) {
            $('.bactop').fadeIn(1000);
        } else {
            $('.bactop').fadeOut(500);
        }

    });

    $('.bactop').on('click', function () {
        $('html,body').animate({
            scrollTop: 0
        }, 2000);

    });

    // skill counter up js
    $('.counter').counterUp({
        delay: 10,
        time: 2000,
    });


    // light box js

    $('.view-work').venobox({
        framewidth: '600px',
        frameheight: '500px',
        borderRadius: '50px',
        bgcolor: '#f21e4e',
        titleattr: 'data-title',
        numeratio: true,
        infinigall: true,
        share: ['facebook', 'twitter', 'download']
    });

    //testimonials
    $('.tesimonial-items').slick({
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false,
        infinite: true,
        slidesToScroll: 2,
        slidesToShow: 2,
        dots: true,
        dotsClass: 'slide-dots',
    });

    // works filterzr

    $('.filter-container').filterizr();
    $('.filter-menu ul li').on('click', function () {

        $('.filter-menu ul li').removeClass('active');
        $(this).addClass('active');
    });

    // riples js

    $('#banner_part').ripples({
        resolution: 520,
        dropRadius: 10,
        perturbance: 0.01,
        imageUrl: null,
        perturbance: 0.03,
        interactive: true,
    });


    $('.color-icon').click(function () {
        $('#colors').stop().toggle(500);
    });

    // color change js

    $('.color1').click(function () {
        $(':root').get(0).style.setProperty('--primary-color', '#f21e4e');
        $(':root').get(0).style.setProperty('--background-color', 'rgba(242, 30, 78, 0.1)');
    });
    $('.color2').click(function () {
        $(':root').get(0).style.setProperty('--primary-color', '#FF1493');
        $(':root').get(0).style.setProperty('--background-color', 'rgba(255,20,47, 0.1)');
    });
    $('.color3').click(function () {
        $(':root').get(0).style.setProperty('--primary-color', '#7b68ee');
        $(':root').get(0).style.setProperty('--background-color', 'rgba(123,104,238, 0.1)');
    });
    $('.color4').click(function () {
        $(':root').get(0).style.setProperty('--primary-color', '#00bfff');
        $(':root').get(0).style.setProperty('--background-color', 'rgba(0,191,255, 0.1)');
    });



    

});
