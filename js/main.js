$(document).ready(function () {
  // Basic Swiper slider
      var mySwiper = new Swiper ('.swiper-main', {

        fadeEffect: { crossFade: true },
        virtualTranslate: true,
        autoplay: false,
        speed: 1000, 
        slidersPerView: 1,
        effect: "fade",
        // autoHeight: true,
        calculateHeight:true,
        simulateTouch: false,
      
    navigation: {
    nextEl: '.swiper-bn-next',
    prevEl: '.swiper-bn-prev',
  },
      
      
  });
});

$(window).on('load', function() {
  $('.preloader__image').delay(2000).animate({
    // width: "0px",
    // // top: "30px",
    // // left: "30px",
    display: 'none',
  });
  $('.preloader').delay(1500).fadeOut('slow');
  setInterval(function(){
    $('.preloader__image').delay(3000).css({
      'position': 'relative', 
      'transform': 'none',
    });
  }, 4000);
});


$('.swiper-bn-next').on({
  "click": function() {
    $(".logo" ).delay(1500).css( {'filter' : 'brightness(0) invert(1)',});
    $(".phone" ).delay(1500).css( {'color' : '#ffffff',});
  }
});

$('.swiper-bn-prev').on({
  "click": function() {
    $( ".logo" ).delay(1500).css( {'filter': 'brightness(1) invert(0)', });
    $(".phone" ).delay(1500).css( {'color' : '#65222b',});
  }
});



// var minOffset = 50;
//   window.onscroll = function() { 
//     let has_class = document.body.classList.contains("is_scrolled");
 
//     if (minOffset < document.documentElement.scrollTop ) {
//       if (!has_class) {
//           document.body.classList.add("is_scrolled");
//       } 
//     } else if (has_class) {
//       document.body.classList.remove("is_scrolled")

//     } 
//   }



  
