'use strict';

(function ($) {
  var lastWindowScrollTop = 0;
  var originalOverlayPadding = 0;

  function isIPhone() {
    return /iPhone/.test(navigator.userAgent);
  }

  function isPad() {
    return /iPad/.test(navigator.userAgent);
  }

  function fixedBody() {
    lastWindowScrollTop = $(window).scrollTop();
    $('body').addClass('noscroll');
    $('body').css('top', '-' + lastWindowScrollTop + 'px');
  }

  function looseBody() {
    $('body').removeClass('noscroll');
    $('body').css('top', '');
    window.scrollTo(0, lastWindowScrollTop);
  }

  $.fn.scrollableOverlay = function () {
    var $this = $(this);
    this.on('show', function () {
      $this.removeClass('hidden');
      $this.addClass('fix-fixed');
      originalOverlayPadding = parseInt($this.css('padding-bottom'));
      // Fix iPad would show navbar(44px) when fixed
      // Fix iPhone would show navbar(44px) and toolbar(44px) when fixed
      var tradeOff = isIPhone() ? 88 : isPad() ? 44 : 0;
      $this.css('padding-bottom', (originalOverlayPadding + tradeOff) + 'px');
      fixedBody();
    })
    this.on('hide', function () {
      $this.addClass('hidden');
      $this.removeClass('fix-fixed');
      $this.css('padding-bottom', originalOverlayPadding + 'px');
      looseBody();
    })
  };
})(jQuery);