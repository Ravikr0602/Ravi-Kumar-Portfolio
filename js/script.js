
         $(".slider").owlCarousel({
           loop: true,
           autoplay: true,
           autoplayTimeout: 2000, //2000ms = 2s;
           autoplayHoverPause: true,
           responsive:{
             0:{
               items:1
             },
             700:{
               items:2
             },
             1000:{
               items:3
             },
             1200:{
               items:4
             }
           }
         });
      