(function ($) {
    "use strict";
 
    $(window).on('load', function () {
        $(".preloader").fadeOut(800, "linear");
        var ptPage = $('.animated-sections');
        if (ptPage[0]) { PageTransitions.init({ menu: 'ul.main-menu', }); }
    }).on('resize', function () {
        
    });

})(jQuery);