'use strict';

(function ($) {

  var lastWindowScrollTop = 0,
      userAgent = navigator.userAgent,
      $body = $('body'),
      isIOS = /iPhone|iPad/.test(userAgent),
      NO_SCROLL_CLASS = isIOS
          ? 'ios-noscroll'
          : 'non-ios-noscroll';

  function fixedBody() {
    if (isIOS) {
      lastWindowScrollTop = $(window).scrollTop();
      $body.addClass(NO_SCROLL_CLASS);
      $body.css('top', '-' + lastWindowScrollTop + 'px');
    } else {
      $body.addClass(NO_SCROLL_CLASS);
    }
  }

  function looseBody() {
    $body.removeClass(NO_SCROLL_CLASS);
    if (isIOS) {
      $body.css('top', '');
      window.scrollTo(0, lastWindowScrollTop);
    }
  }

  $.fn.scrollableOverlay = function () {
    this.on('show', fixedBody)
    this.on('hide', looseBody)
  };
  
})(jQuery);