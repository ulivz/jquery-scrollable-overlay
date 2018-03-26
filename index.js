'use strict';

(function ($) {

  function isIPhone() {
    return /iPhone/.test(userAgent);
  }

  function isPad() {
    return /iPad/.test(userAgent);
  }

  var lastWindowScrollTop = 0,
      originalOverlayPaddingBottom = 0,
      userAgent = navigator.userAgent,
      $body = $('body'),
      isIOS = isIPhone() || isPad(),
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
    var $this = $(this);
    this.on('show', function () {
      $this.removeClass('hidden');
      if (isIOS) {
        originalOverlayPaddingBottom = parseInt($this.css('padding-bottom'));
        var tradeOff = isIPhone() ? 88 : isPad() ? 44 : 0;
        $this.css('padding-bottom', (originalOverlayPaddingBottom + tradeOff) + 'px');
      }
      fixedBody();
    })
    this.on('hide', function () {
      $this.addClass('hidden');
      if (isIOS) {
        $this.css('padding-bottom', originalOverlayPaddingBottom + 'px');
      }
      looseBody();
    })
  };
})(jQuery);