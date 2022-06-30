$(".owl-carousel").owlCarousel({
  nav: true,
  loop: true,
  autoplay: true,
  autoWidth:true,
  margin: 30,
  autoplayTimeout: 5000, //2000ms = 2s;
  smartSpeed: 800,
  startPosition: 1,
  autoplayHoverPause: true,
  nav: true,
  navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
});


$('.owl-carousel')
  .on('changed.owl.carousel initialized.owl.carousel', function(event) {
    $(event.target)
      .find('.owl-item').removeClass('last')
      .eq(event.item.index + event.page.size - 1).addClass('last');
  }).owlCarousel({
  
});
