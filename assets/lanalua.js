/*!
 * Lanalua v1.0 (http://lanalua.com)
 * Copyright 2017 Lanalua
 */

if (typeof $ === 'undefined') {
    throw new Error('Lanalua\'s JavaScript requires jQuery')
}

//Lanalua functions
var lanalua = (function () {

    //Variables
    var initialized;
    var scrollRunning;
    var hashChanged;
    var pageHeight;
    var pageWidth;
    var pageOffsets;
    var pageHeights;
    var scrollCount;
    var scrollTop;
    var scrollBottom;
    var previousScrollTop;
    var resizeFlag;
    var scrollFlag;
    var webTitle;
    var pageNames;
    var pageTitles;
    var currentPage;
    var nextPage;
    var isIE;
    var checkerInterval;
    var scrolled;
    var minWidth;

    //Interface
    return {
        init: init,
        goToPage: goToPage,
        getScrollTop: getScrollTop,
        pageOffsets: function () { return pageOffsets; }
    }

    //Functions

    //Initialize application
    function init() {
        //Initialize flags
        initialized = false; 
        scrollRunning = false; 
        hashChanged = false; 

        //Set page size, first PageSizeCalc, initialize resize and scroll flags
        pageHeight = clientHeight();
        pageWidth = clientWidth();
        scrollTop = 0;
        pageSizeCalc();

        //Page Names and Titles
        webTitle = "Lanalua";
        pageNames = [];
        pageTitles = [];
        $('.pages .page').each(function (index) {
            pageNames.push($(this).attr('id'));
            pageTitles.push($(this).data('title'));
        });
        
        //FirstTime Class, Hash and Title
        if (window.location.hash == '') {
            window.history.replaceState('page-0', pageTitles[0], '#' + pageNames[0]);
            currentPage = 0;
        }
        else currentPage = getPageByName(window.location.hash.substring(1)); 
        document.title = getTitle();
        $('body').addClass('active-' + currentPage);

        //Init NextPage
        nextPage = currentPage; 

        //Handlers
        $(window).on('resize orientationChange', resizeHandler);
        $(window).on('scroll', scrollHandler);
        $(window).on('popstate', historyHandler);

        //Mobile manual scroll
        $(window).on('touchmove', touchMoveHandler);

        //Wheel scroll
        $(window).on('DOMMouseScroll', mouseWheelEvent);
        $(window).on('mousewheel', mouseWheelEvent);
        $(window).on('wheel', mouseWheelEvent);

        //Not compatible with IE
        
        isIE = /MSIE \d|Trident.*rv:/.test(navigator.userAgent);
        if (isIE) $(window).off('popstate', historyHandler);

        //Init ChangesChecker
        checkerInterval = setInterval(changesChecker, 100);

        //Determine if page is scrolled
        setScrolled(scrollTop - pageOffsets[currentPage] >= 2);

        //Set page initialized
        initialized = true;
        $('body').addClass('initialized');

        //Min width for effect
        minWidth = 768;
    }

    //Go to a page (for links)
    function goToPage(page) {
        nextPage = page; 
        scrollToPage(false, true);
        if ($('.navbar-toggle').is(':visible') &&
            $('.navbar-collapse').is(':visible')) $('.navbar-toggle').click();
        return false;
    }

    //Calc offset and height of all pages, set scrollCount and reinitialize resize and scroll flags
    function pageSizeCalc() {
        pageOffsets = []; 
        pageHeights = []; 
        $('.pages .page').each(function (index) {
            $(this).css('height', '');
            pageOffsets.push($(this).offset().top);
            pageHeights.push($(this).outerHeight());
            //Set fixed value to height for inner elements
            $(this).css('height', $(this).outerHeight());
        });
        
        //Set scrollCount, scrollTop and scrollBottom
        updateScrollValues();

        resizeFlag = -1; 
        scrollFlag = -1; 
    }

    //Called when window is resized
    function resizeHandler() {
        var newPageHeight = clientHeight();
        var newPageWidth = clientWidth();
        if (newPageHeight != pageHeight || newPageWidth != pageWidth) {
            pageHeight = newPageHeight; 
            pageWidth = newPageWidth;

            resizeFlag = 0; 
            scrollFlag = 0; 
        }
    }

    //Called when web is scrolled
    function scrollHandler() {
        //Force run resizeHandler first in some browsers
        if (clientHeight() != pageHeight) resizeHandler();
        if (clientWidth() != pageWidth) resizeHandler();

        if (resizeFlag == -1 && !scrollRunning) {
            updateScrollValues();
            var scrollCountRel = scrollCount / pageHeight; 

            if (hashChanged) {
                nextPage = getPageByName(window.location.hash.substring(1));
                scrollToPage(true);
                hashChanged = false;
            }
            else {
                if (scrollTop >= previousScrollTop && scrollCountRel > 0.6) {
                    nextPage = Math.max(currentPage + 1, getPageByScrollTop()); 
                    scrollToPage();
                }
                else if (scrollTop <= previousScrollTop && scrollCountRel < -0.6) {
                    nextPage = Math.min(currentPage - 1, getPageByScrollTop()); 
                    scrollToPage();
                }
                else if (scrollCount != 0)
                    scrollFlag = 0; 
            }
        }

        checkScrolledClass();
    }

    //Called when history backs or fowards (does not work on IE)
    function historyHandler() {
        hashChanged = true; 
    }

    //Called when user scroll with touch
    function touchMoveHandler() {
        if ($('html').is(':animated') || $('body').is(':animated')) {
            $("html,body").stop();
            scrollComplete();
        }
    }

    //Called when user scroll with wheel
    function mouseWheelEvent() {
        if ($('html').is(':animated') || $('body').is(':animated')) {
            return false;
        }
    }

    //Check changes in size and scroll periodically
    function changesChecker() {
        if (resizeFlag > -1 && resizeFlag < 5)
            resizeFlag++; 
        if (resizeFlag == 5) {
            pageSizeCalc();
            scrollToPage(true);
        }
        if (resizeFlag >= 5)
            resizeFlag = -1;

        if (!scrollRunning) {
            if (scrollFlag > -1 && scrollFlag < 5)
                scrollFlag++; 
            if (scrollFlag == 5) {
                var scrollCountRel = scrollCount / pageHeight;
                if (scrollCountRel > -0.2 && scrollCountRel < 0.2) scrollToPage();
                else scrollFlag = -1;
            }
            if (scrollFlag >= 5)
                scrollFlag = -1;
        }
    }

    //Scroll to a page
    function scrollToPage(immediate, isLink) {
        immediate = typeof immediate !== 'undefined' ? immediate : false;
        isLink = typeof isLink !== 'undefined' ? isLink : false;

        if (nextPage != currentPage || scrollCount != 0) {
            var nextPageDiv = $('.page-' + nextPage); 

            if (nextPageDiv != null && nextPageDiv.length > 0) {
                var pageChanged = currentPage != nextPage; 
                var nextScrollTop;

                $('body').removeClass('active-' + currentPage);
                scrollRunning = true; 
                currentPage = nextPage; 
                $('body').addClass('active-' + currentPage);

                if (immediate || hashChanged || isLink || (pageChanged ? scrollCount >= 0 : scrollCount < 0))
                    nextScrollTop = nextPageDiv.offset().top;
                else
                    nextScrollTop = nextPageDiv.offset().top + pageHeights[currentPage] - clientHeight(true) + 1;

                //Not compatible with IE
                if (!hashChanged && pageChanged && !isIE)
                    window.history.pushState('page-' + currentPage, pageTitles[currentPage], '#' + pageNames[currentPage]);

                if (immediate) {
                    $('html,body').scrollTop(nextScrollTop);
                    scrollComplete();
                }
                else {
                    //Remove effect in mobile page changes (TODO: revisar si solo pageChanged)
                    if (!isLink && pageChanged && pageWidth < minWidth) {
                        scrollComplete();
                    }
                    else {
                        $('html,body').stop().animate({
                            scrollTop: nextScrollTop,
                        },
                        {
                            easing: 'swing',
                            duration: 1000,
                            complete: scrollComplete
                        });
                    }
                }
            }
        }
        else if (scrollFlag != -1) {
            scrollFlag = -1;
        }
    }

    //Called when scroll is completed
    function scrollComplete() {
        if (scrollRunning) {
            scrollRunning = false; 
            updateScrollValues();
            scrollFlag = -1; 

            document.title = getTitle();

            checkScrolledClass();
        }
    }

    //Returns a page number by documment scroll
    function getPageByScrollTop() {
        var page = 0;
        var i = 0;
        var scrollTop = getScrollTop();

        for (i = 0; i < pageOffsets.length; i++) {
            if (scrollTop >= pageOffsets[i]) page = i;
            else break;
        }

        return page;
    }

    //Returns a page number by name
    function getPageByName(name) {
        var page = 0;
        var i = 0;

        for (i = 0; i < pageNames.length; i++) {
            if (name == pageNames[i]) {
                page = i;
                break;
            }
        }

        return page;
    }

    //Returns actual title
    function getTitle() {
        return currentPage == 0
                ? webTitle + ' | ' + pageTitles[currentPage]
                : pageTitles[currentPage] + ' | ' + webTitle;
    }

    //Update scrollCount, scrollTop and scrollBottom
    function updateScrollValues() {
        previousScrollTop = scrollTop;
        scrollTop = getScrollTop();
        scrollBottom = scrollTop + clientHeight(true);

        if (scrollTop < pageOffsets[currentPage])
            scrollCount = scrollTop - pageOffsets[currentPage];
        else if (scrollBottom > pageOffsets[currentPage] + pageHeights[currentPage])
            scrollCount = scrollBottom - (pageOffsets[currentPage] + pageHeights[currentPage]);
        else
            scrollCount = 0;
    }

    //Returns client height
    function clientHeight(max) {
        max = typeof max !== 'undefined' ? max : false;
        if (max) return Math.max(document.documentElement.clientHeight, window.innerHeight);
        else return document.documentElement.clientHeight || window.innerHeight;
    }

    //Returns client width
    function clientWidth(max) {
        max = typeof max !== 'undefined' ? max : false;
        if (max) return Math.max(document.documentElement.clientWidth, window.innerWidth);
        else return document.documentElement.clientWidth || window.innerWidth;
    }

    //Returns scrollTop
    function getScrollTop() {
        return document.documentElement.scrollTop || window.pageYOffset;
    }

    function checkScrolledClass() {
        //Does not work fine with scrollTop - pageOffsets[currentPage] == 0
        if (scrolled && Math.abs(scrollTop - pageOffsets[currentPage]) < 2)
            setScrolled(false);
        else if (!scrolled && Math.abs(scrollTop - pageOffsets[currentPage]) >= 2)
            setScrolled(true);
    }

    function setScrolled(value) {
        scrolled = value;
        if (value) {
            $('body').removeClass('not-scrolled');
            $('body').addClass('scrolled');
        }
        else {
            $('body').removeClass('scrolled');
            $('body').addClass('not-scrolled');
        }
    }

})();

//Run!
//$(document).ready(lanalua.init);

//All images are loaded
$(window).on("load", lanalua.init);