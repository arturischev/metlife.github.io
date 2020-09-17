$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger,.top-menu').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('.get-more').on('click', function() {
        $('.modal').css({
            'opacity': 1,
            'visibility': 'visible'    
    });
        $('.myModal__content').css({
            'opacity': 1,
            'transform':'perspective(600px) translate(0px, 0px) rotateX(0deg)'
        });
    });

    $('.myModal__close, .myModal__area').on('click', function() {
        $('.modal').css({
            'opacity': 0,
            'visibility': 'hidden'    
    });
        $('.myModal__content').css({
            'opacity': 0,
            'transform':'perspective(600px) translate(0px, -100%) rotateX(45deg)'
        });
    });

    $('.slider').slick({
        arrows:true,
        dots:true,
        adaptiveHeight:false,
        slidesToShow:3,
        slidesToScroll:1,
        speed:1000,
        easing:'linear',
        infinite:true,
        initialSlide:0,
        autoplay:true,
        autoplaySpeed:3000,
        pauseOnFocus:true,
        pauseOnHover:true,
        pauseOnDotsHover:true,
        draggable:false,
        swipe:true,
        touchThreshold:5,
        touchMove:true,
        waitForAnimate:true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow:2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow:1,
                }
            }
        ]
    });
});
