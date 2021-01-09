
// Check if element is scrolled into view
function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemTop >= docViewTop));
}


// If element is scrolled into view, fade it in
$(window).scroll(function () {
    $('.scroll-top-animated .animate__animated').each(function () {
        if (isScrolledIntoView(this) === true) {
            $(this).addClass('animate__fadeInUp');
        }
    });
    $('.scroll-left-animated .animate__animated').each(function () {
        if (isScrolledIntoView(this) === true) {
            $(this).addClass('animate__fadeInLeft');
        }
    });
});


$(window).scroll(function () {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 300);
});
