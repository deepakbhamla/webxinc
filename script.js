// tooltip
$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});
// navbar fixed at top
window.onscroll = function () { myFunction() };

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

(function ($) {
    $(window).on('scroll', function () {
        if (jQuery('#main-header').hasClass("et-fixed-header")) {
            jQuery('#logo').attr('src', './small-logo.png');
        }
        else {
            jQuery('#logo').attr('src', './small-logo.png');
        }
    });
})(jQuery);