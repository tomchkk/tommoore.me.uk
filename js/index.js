$(document).ready(function() {

    /* navbar sticks to the top of the window on all pages */
    $("#navbar").sticky();

    var navMenu = $("#nav-menu-collapsible");
    var verticalBar = $("#nav-menu-toggle .vertical-bar");

    /* toggle collapsible nav-bar */
    $("#nav-menu-toggle").click(function() {
        if (!verticalBar.hasClass("rotate")) {
            verticalBar.addClass("rotate");
            navMenu.removeClass("collapsed");
            navMenu.addClass("uncollapsed");
        } else {
            verticalBar.removeClass("rotate");
            navMenu.removeClass("uncollapsed");
            navMenu.addClass("collapsed");
        }
    });

    $("#nav-menu-collapsible a").click(function() {
        /* hide collapsible nav-bar when links are clicked */
        verticalBar.removeClass("rotate");
        navMenu.removeClass("uncollapsed");

        /* set-up event listeners for scrolling animation */
        var anchorRef = $(this).attr("href");
        $(anchorRef).animatescroll();
    });

    /* hover element to take a peek at the next page */
    $(".peek-a-boo").mouseenter(function() {
        $("#arrow").addClass("arrow-state-hover");
        window.scrollBy(0, 10);
    });
    $(".peek-a-boo").mouseleave(function() {
        window.scrollBy(0, -10);
        $("#arrow").removeClass("arrow-state-hover");
    });
    /* scrolling animation includes padding to account for peek-a-boo scroll */
    $(".peek-a-boo").click(function() {
        var peekRef = $(this).attr("href");
        $(peekRef).animatescroll({
            padding: -10
        });
    });

    $("#copyright-year").text(new Date().getFullYear());
});
