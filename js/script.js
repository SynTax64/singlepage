$(document).ready(function () {
    $('.navbar').show();

    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 130) {
                $('.navbar').fadeOut();
            } else {
                $('.navbar').fadeIn();
            }
        });
    });

    $('.carousel').carousel({
        interval: 4000
    });
});