// $(document).ready(function() {
//   console.log("ready!");
// });
$(document).ready(function() {
  
  $(window).scroll(function () {
      console.log($(window).scrollTop())
    if ($(window).scrollTop() > 550) {
      $('#navbar').addClass('navbar-fixed');
    }
    if ($(window).scrollTop() < 550) {
      $('#navbar').removeClass('navbar-fixed');
    }
  });
});

$(document).ready(function() {
  $('a[rel="relativeanchor"]').click(function(){
      $('html, body').animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top
      }, 500);
      return false;
  }); 
});