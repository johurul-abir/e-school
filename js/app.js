

jQuery(document).ready(function($) {

    //slider code
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:3000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });


    // counterup code
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    }); 

    
});

//animation code

//AOS.init({
  //  delay: 50,
  //  duration: 1200,
// });
