/**
 * hamburger.js
 *
 * Mobile Menu Hamburger
 * =====================
 * A hamburger menu for mobile websites
 *
 * Created by Thomas Zinnbauer YMC AG  |  http://www.ymc.ch
 * Date: 21.05.13
 */

$(document).ready(function () {

    //Open the menu
    $(".hamburger").click(function () {

        $('div.content').css('min-height', $(window).height());

        $('nav').css('opacity', 1);

        //set the width of primary content container -> content should not scale while animating
        var contentWidth = $('div.content').width();

        //set the content with the width that it has originally
        $('div.content').css('width', contentWidth);

        //display a layer to disable clicking and scrolling on the content while menu is shown
        $('div.content-overlay').css('display', 'block');

        //disable all scrolling on mobile devices while menu is shown
        $('div.content-wrapper').bind('touchmove', function (e) {
            e.preventDefault()
        });

        //set margin for the whole container with a $ UI animation
        $("div.content-wrapper").animate({"marginLeft": ["70%", 'easeOutExpo']}, {
            duration: 700
        });

    });

    //close the menu
    $("div.content-overlay").click(function () {

        //enable all scrolling on mobile devices when menu is closed
        $('div.content-wrapper').unbind('touchmove');

        //set margin for the whole container back to original state with a $ UI animation
        $("div.content-wrapper").animate({"marginLeft": ["-1", 'easeOutExpo']}, {
            duration: 700,
            complete: function () {
                $('div.content').css('width', 'auto');
                $('div.content-overlay').css('display', 'none');
                $('nav').css('opacity', 0);
                $('div.content').css('min-height', 'auto');

            }
        });
    });

});