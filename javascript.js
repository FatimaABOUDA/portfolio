


    $(function () {
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 10) {
            $('.et-hero-tabs-container').addClass('active');
        } else {
            $('.et-hero-tabs-container').removeClass('active');
        }
    });
});
