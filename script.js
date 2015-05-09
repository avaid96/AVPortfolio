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
  $('a[rel="scroller"]').click(function(){
      $('html, body').animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top
      }, 1000);
      return false;
  }); 
});

// codeslider
$(document).ready(function(){
    
        var intervalTimer = null;
    
        $('#codeslider').hover(
    
            function () {
                if($("a.active").is('.mercury')){
                    $("#descriptionls").fadeIn("1000");
                }
                
                if (intervalTimer !== null) {
                    clearInterval(intervalTimer);
                    intervalTimer = null;
                }
                
                var quotes = [
                    "C++",
                    "Java",
                    "Python",
                    "HTML",
                    "CSS",
                    "JQuery",
                    "Git",
                    "C#",
                 ];
                    
                var i = 0;
                function update() {
                     $("#codeslider").html(quotes[i]);
                     i = (i + 1) % quotes.length;
                }    
                update();
                intervalTimer = setInterval(update, 1000);
            });
    });

// econslider
$(document).ready(function(){
    
        var intervalTimer = null;
    
        $('#econslider').hover(
    
            function () {
                if($("a.active").is('.mercury')){
                    $("#descriptionls").fadeIn("1000");
                }
                
                if (intervalTimer !== null) {
                    clearInterval(intervalTimer);
                    intervalTimer = null;
                }
                
                var quotes = [
                    "Intermediate Microeconomics",
                    "Intro Macroeconomics",
                    "Game theory",
                    "Auctions",
                    "Probability and statistics",
                 ];
                    
                var i = 0;
                function update() {
                     $("#econslider").html(quotes[i]);
                     i = (i + 1) % quotes.length;
                }    
                update();
                intervalTimer = setInterval(update, 1000);
            });
    });

// mathslider
$(document).ready(function(){
    
        var intervalTimer = null;
    
        $('#mathslider').hover(
    
            function () {
                if($("a.active").is('.mercury')){
                    $("#descriptionls").fadeIn("1000");
                }
                
                if (intervalTimer !== null) {
                    clearInterval(intervalTimer);
                    intervalTimer = null;
                }
                
                var quotes = [
                    "Linear algebra",
                    "Multivariate calculus",
                    "Probability and scotastic process",
                    "Proofs",
                 ];
                    
                var i = 0;
                function update() {
                     $("#mathslider").html(quotes[i]);
                     i = (i + 1) % quotes.length;
                }    
                update();
                intervalTimer = setInterval(update, 1000);
            });
    });

// finslider
$(document).ready(function(){
    
        var intervalTimer = null;
    
        $('#finslider').hover(
    
            function () {
                if($("a.active").is('.mercury')){
                    $("#descriptionls").fadeIn("1000");
                }
                
                if (intervalTimer !== null) {
                    clearInterval(intervalTimer);
                    intervalTimer = null;
                }
                
                var quotes = [
                    "Equity research",
                    "Bonds",
                    "Governing finance",
                 ];
                    
                var i = 0;
                function update() {
                     $("#finslider").html(quotes[i]);
                     i = (i + 1) % quotes.length;
                }    
                update();
                intervalTimer = setInterval(update, 1000);
            });
    });