$(document).ready(function() {

  $(".dropdown-button").dropdown({
    hover: true
  });

  $(".button-collapse").sideNav();

  $(".parallax").parallax();

  $(".navbar").pushpin({
    top: 50,
    // bottom: 1000,
    offset: 0
  });

  $(".scrollspy").scrollSpy();

  function smoothScroll() {
    var scrollEl = $(".smooth-scroll");
    scrollEl.on("click", function(){
      var smoothAnchor = $(this).attr("href");
      event.preventDefault();

      $(smoothAnchor).velocity("scroll", {
        duration: 750,
        easing: [0.77, 0, 0.175, 1],
        offset: -50
      });
    });
  }

  smoothScroll();

  // $('a[href*="#"]:not([href="#"])').click(function() {
  //     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
  //       var target = $(this.hash);
  //       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
  //       if (target.length) {
  //         $('html, body').animate({
  //           scrollTop: target.offset().top
  //         }, 500);
  //         return false;
  //       }
  //     }
  //   });
})

function initMap() {
  var map_options = {
    center: { lat: 3.207576, lng: 101.7774723 },
    zoom: 8
  }

  map_canvas = document.getElementById('map');
  var map = new google.maps.Map(map_canvas, map_options);
}
