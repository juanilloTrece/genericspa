let navbar = $(".nav-principal");

$(window).scroll(function () {
    // get the complete hight of window
    let oTop = $(".servicio").offset().top - window.innerHeight;
    if ($(window).scrollTop() > oTop) {
        navbar.addClass("sticky");
    } else {
        navbar.removeClass("sticky");
    }
});