
document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
});


    $(function () {
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 10) {
            $('.et-hero-tabs-container').addClass('active');
        } else {
            $('.et-hero-tabs-container').removeClass('active');
        }
    });
});
