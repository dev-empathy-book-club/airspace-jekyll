(function(){
  var ready = function(fn) {
    if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }

  ready(function() {
    // $("#portfolio-contant-active").mixItUp();

    /*
  $("#testimonial-slider").owlCarousel({
      paginationSpeed : 500,      
      singleItem:true,
      autoPlay: 3000,
  });




  $("#clients-logo").owlCarousel({
    autoPlay: 3000,
    items : 5,
    itemsDesktop : [1199,5],
    itemsDesktopSmall : [979,5],
  });

  $("#works-logo").owlCarousel({
    autoPlay: 3000,
    items : 5,
    itemsDesktop : [1199,5],
    itemsDesktopSmall : [979,5],
  });
  */

    /*
      // google map
    var map;
    function initMap() {
      map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
      });
    }
    */

    // Counter

    /*
  $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    */

    // Defer YouTube video and GCal widget load for performance reasons
    // https://scottdeluzio.com/defer-parsing-javascript-youtube-videos/
  //   (function() {
      // var vidDefer = document.getElementsByTagName('iframe');
      // for (var i=0; i<vidDefer.length; i++) {
        // if(vidDefer[i].getAttribute('data-src')) {
          // vidDefer[i].setAttribute('src',vidDefer[i].getAttribute('data-src'));
        // }
      // }
    // })()

  });
})();
