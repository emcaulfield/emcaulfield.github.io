
$(document).ready(function ($) {


  $('#about-link').click(function(e){
    e.preventDefault();
    $('#about-nav').fadeToggle();
    $('#essentials-nav').fadeOut();
    $('#recipes-nav').fadeOut();
  });

  $('#essentials-link').click(function(e){
    e.preventDefault();
    $('#about-nav').fadeOut();
    $('#essentials-nav').fadeToggle();
    $('#recipes-nav').fadeOut();
  });

  $('#recipes-link').click(function(e){
    e.preventDefault();
    $('#about-nav').fadeOut();
    $('#essentials-nav').fadeOut();
    $('#recipes-nav').fadeToggle();
  });

  $('.nav-toplevel').click(function(){
    $('.overlay-nav').fadeOut("slow");

    });

    $('.nav-secondlevel').click(function(){
      $('.overlay-nav').fadeOut("slow");
  });

  $('.nav-thirdlevel').click(function(){
    $('.overlay-nav').fadeOut("slow");

  // (function($) {
  //     var $window = $(window);
  //
  //     $window.resize(function resize(){
  //         if ($window.width() < 800) {
  //             return $('.overlay-nav').fadeOut();
  //         }
  //
  //     }).trigger('resize');
  // })(jQuery);

  // $('.overlay-nav').click(function(){
  //   $(this).fadeToggle();
  // });

  });

  $('.close').click(function(){
    $('.overlay-nav').fadeOut("slow");
  });

  let $section = $('section');
  let waypoints = $section.waypoint({
    handler: function(direction) {
      if(direction === 'down') {
        $(this.element).addClass('active');
      } else {
        $(this.element).removeClass('active');
      }
    },
    offset: 250
  });
});
