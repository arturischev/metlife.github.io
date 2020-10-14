$(document).ready(function () {
    jQuery("a.scrollto").click(function () { /*smooth scrolling */
        elementClick = jQuery(this).attr("href")
        destination = jQuery(elementClick).offset().top - 100;
        jQuery("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination
        }, 600);
        return false;
    });

    $('.header__burger,.scrollto').click(function (event) {
        $('.header__burger,.header-menu,.scrollto').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('.get-more,.myModal__close,.myModal__area').click(function(event) {
        $('.modal,.myModal__content').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('.slider').slick({
        // arrows: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 800,
        autoplay: true,
        autoplaySpeed: 2000,
        waitForAnimate: false,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ]
    });
});