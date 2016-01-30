$(document).ready(function () {
    $('.navbar').show();

    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 400) {
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