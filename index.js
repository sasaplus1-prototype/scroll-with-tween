(function(){

  'use strict';

  var db = document.body,
      dd = document.documentElement;

  var scroll = document.getElementById('js-scroll');

  scroll.addEventListener('click', scrollToTop, false);

  function scrollToTop() {
    var isEnd, timeout, animate, tween;

    isEnd = false;

    timeout = function(fn) {
      return setTimeout(fn, (1000 / 60) >> 0);
    };

    animate = function(time) {
      if (isEnd) {
        return;
      }

      timeout(animate);
      TWEEN.update(time);
    };

    tween = new TWEEN.Tween({
      scrollTop: window.pageYOffset || (dd || db.parentNode || db).scrollTop
    }).to({
      scrollTop: 0
    }, 500);

    tween
      .easing(TWEEN.Easing.Sinusoidal.InOut)
      .onUpdate(function() {
        db.scrollTop = this.scrollTop;
        dd.scrollTop = this.scrollTop;
      })
      .onComplete(function() {
        isEnd = true;
      });

    timeout(animate);
    tween.start();
  }

}());
