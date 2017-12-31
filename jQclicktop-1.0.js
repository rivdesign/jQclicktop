(function($){

  $.fn.urijqclicktop = function(options) {

    var settings = $.extend({
      speed: 1000,
      positionshow: 1000
    },options);

    return this.each(function(){
      var $this = $(this);

      $this.hide();
      
      $this.click(function(){
        $('body,html').animate({
          scrollTop: 0
        }, settings.speed );
        return false;
      });

      $(document).scroll(function(){
        var $scrollPos = $(window).scrollTop();
        if ($(this).scrollTop() > settings.positionshow) {
          $this.fadeIn(300);
        } else {
          $this.fadeOut(300);
        }
      });
      
    });

  };

}(jQuery));