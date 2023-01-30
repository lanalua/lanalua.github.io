/*!
 * Lanalua Background Effect v1.0 (http://lanalua.com)
 * Copyright 2017 Lanalua
 */

if (typeof $ === 'undefined') {
    throw new Error('Lanalua\'s JavaScript requires jQuery')
}

//LanaluaBackground functions
var lanaluaBackground = (function () {

    //Variables
    var bgIndex;
    var intervalId;
    var timeoutId;

    //Interface
    return {
        init: init,
        changeHomeBackground: changeHomeBackground
    }

    //Functions

    //Initialize Background Effect
    function init() {
        scrollHandler();

        $(window).on('scroll', scrollHandler);

        /*Home background changes*/
        bgIndex = Math.floor((Math.random() * 4));
        setHomeBackground();

        resetInterval();
    }

    function changeHomeBackground(i) {
        clearInterval(intervalId);
        clearTimeout(timeoutId);

        bgIndex = i;

        $('.page-selector').addClass('bg-transition');
        $('.page-selector a').blur();

        setTimeout(setHomeBackground, 1000);

        resetInterval();

        return false;
    }

    function scrollHandler() {
        scrollTop = lanalua.getScrollTop();
        pageOffsets = lanalua.pageOffsets();

        var yLevel0 = calcParallax(scrollTop, 0.85);
        var yLevel1 = calcParallax(scrollTop, 0.9);
        var yLevel2 = calcParallax(scrollTop, 0.95);
        $('.transition-background').each(function () { $(this).css('background-position', 'center ' + yLevel2 + 'px, center ' + yLevel1 + 'px, center ' + yLevel0 + 'px') });

        var yLevelPic0 = 600 + calcParallax(scrollTop - pageOffsets[1], 0.8);
        if (yLevelPic0 > -350 && yLevelPic0 < 450)
            $('.transition-picture-0').css('background-position', 'center ' + yLevelPic0 + 'px');

        var yLevelPic1 = 600 + calcParallax(scrollTop - pageOffsets[2], 0.8);
        if (yLevelPic1 > -350 && yLevelPic1 < 450)
            $('.transition-picture-1').css('background-position', 'center ' + yLevelPic1 + 'px');

        var yLevelPic2 = -600 - calcParallax(scrollTop - pageOffsets[3], 1.1);
        if (yLevelPic2 > -350 && yLevelPic2 < 450)
            $('.transition-picture-2').css('background-position', 'center ' + yLevelPic2 + 'px');

        var yLevelPic3 = 600 + calcParallax(scrollTop - pageOffsets[4], 0.8);
        if (yLevelPic3 > -350 && yLevelPic3 < 450)
            $('.transition-picture-3').css('background-position', 'center ' + yLevelPic3 + 'px');
    }

    function calcParallax(scrollposition, speedratio) {
        return Math.round(scrollposition * speedratio);
    }

    function resetInterval() {
        intervalId = setInterval(function () {
            if (bgIndex < 3) bgIndex++;
            else bgIndex = 0;

            $('.page-selector').addClass('bg-transition');

            timeoutId = setTimeout(setHomeBackground, 1000);
        }, 10000);
    }

    function setHomeBackground() {
        $('.page-selector').removeClass('page-home-0');
        $('.page-selector').removeClass('page-home-1');
        $('.page-selector').removeClass('page-home-2');
        $('.page-selector').removeClass('page-home-3');
   
        $('.page-selector').addClass('page-home-' + bgIndex);

        $('.page-selector').removeClass('bg-transition');
    }

})();

//Run!
//$(document).ready(lanaluaBackground.init);

//All images are loaded
$(window).on("load", lanaluaBackground.init);