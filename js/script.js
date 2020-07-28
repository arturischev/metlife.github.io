$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger,.top-menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});
