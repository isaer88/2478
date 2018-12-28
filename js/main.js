$(document).ready(function () {

    console.log('scripts init');

    // fullpage

    new fullpage('#fullpage', {
        navigation: true,
        responsiveWidth: 1000,
        anchors: ['lookbook', 'бренды', 'одежда', 'обувь', 'аксессуары'],
        parallax: true,
        onLeave: function(origin, destination, direction){
            console.log("Leaving section" + origin.index);
        },
    });

    // Top

    $(window).scroll(function () {
        if ($(this).scrollTop() > 150) $('#top').fadeIn();
        else $('#top').fadeOut();
    });
    $('#top').click(function () {
        $('body, html').animate({scrollTop: 0}, 1000);
    });

    // Soc menu

    $('.soc ul li').on('click', function(){
        if ($(this).hasClass('active')) {
            $('.soc ul').addClass('active');
        } else {
            $('.soc ul').removeClass('active');
            $('.soc ul li').removeClass('active');
            $(this).addClass('active');
        }
    });

    $('.button').on('click', function(){
        $('.header_menu').toggleClass('active');
    });

    $('.header_menu ul li a').on('click', function(){
        $('.header_menu').removeClass('active');
    });

});