/*the script will only load AFTER the DOM is loaded*/
$(document).ready(function() {
    /*Sticky nav*/
    $('.js--section-features').waypoint(function(direction) {
        if (direction == 'down') {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });

    /*Scroll on buttons*/ 
    $('.js--scroll-plans').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });

    $('.js--scroll-features').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });

    $('.logo-black').click(function(){
        $('html, body').animate({scrollTop: $('html').offset().top}, 1000);
    });

/*Nav scroll*/
    $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          }
        });
      }
    }
  });

  /*Animations on scroll*/

$('.js--waypoint-1').waypoint(function(direction) {
    $('.js--waypoint-1').addClass('animate__animated animate__backInUp')
  }, {
    offset: '60%'
});


$('.js--waypoint-2').waypoint(function(direction) {
  $('.js--waypoint-2').addClass('animate__animated animate__fadeInUp')
}, {
  offset: '60%'
});


$('.js--waypoint-3').waypoint(function(direction) {
  $('.js--waypoint-3').addClass('animate__animated animate__fadeIn')
}, {
  offset: '60%'
});


$('.js--waypoint-4').waypoint(function(direction) {
  $('.js--waypoint-4').addClass('animate__animated animate__bounce')
}, {
  offset: '60%'
});


$('.js--waypoint-5').waypoint(function(direction) {
  $('.js--waypoint-5').addClass('animate__animated animate__zoomIn')
}, {
  offset: '80%'
});
    

/*Mobile nav*/
$('.js--nav-icon').click(function() {
  let nav = $('.js--main-nav');
  let icon =$('.js--nav-icon');

  nav.slideToggle(500);

  if (icon.attr('name')==='menu') {
    icon.attr('name','close');
  } else {
    icon.attr('name','menu');
  }
  
});

});

