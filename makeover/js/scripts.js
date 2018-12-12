$(document).ready(function(){

  $('#about-link').click(function(e){
    e.preventDefault();
    $('.overlay-nav').fadeOut();
    $('#about-nav').fadeToggle();
  });

  $('#essentials-link').click(function(e){
    e.preventDefault();
    $('.overlay-nav').fadeOut();
    $('#essentials-nav').fadeToggle();
  });

  $('#recipes-link').click(function(e){
    e.preventDefault();
    $('.overlay-nav').fadeOut();
    $('#recipes-nav').fadeToggle();
  });

  $('.overlay-nav').click(function(){
    $(this).fadeToggle();
  });

  $('.close').click(function(){
    $('.overlay-nav').fadeOut();
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
