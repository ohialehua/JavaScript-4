$(function(){
  $('.box1').slideDown(function(){
      $('.box1').css({
        'background-color': '#0000FF',
        'height': '100px',
      })
      $('.box1').slideUp();
  });
});