
let counted = 0;

$(window).scroll(function() {

   var hT = $('#stadk').offset().top,
       hH = $('#stadk').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();

   if (wS > (hT+hH-wH)){

    if(counted == 1) {
      return false;
    }
     
       $({Counter: 0}).animate({Counter: 901}, {
        duration: 1000,
        easing: 'swing',
        step: function () {
            $('#stad').html(parseInt(this.Counter) + 'k');
        }
      });
      $({Counter: 0}).animate({Counter: 21}, {
        duration: 1000,
        easing: 'swing',
        step: function () {
            $('#stadx').html(parseInt(this.Counter) + 'x');
        }
      });
      $({Counter: 0}).animate({Counter: 31}, {
        duration: 1000,
        easing: 'swing',
        step: function () {
            $('#stadk').html(parseInt(this.Counter) + 'm');
        }
      });
       
      counted = 1;
   }
});
$('.account-slider').slick();
$('.users-slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1
});

