$(document).ready(function() {
  "use strict";

  /*----------------------------------
     Quantity Plus Minus
     ------------------------------------*/
    function qnt_incre() {
        $(".qtyBtn").on("click", function () {
            var qtyField = $(this).parent(".qtyField"),
                    oldValue = $(qtyField).find(".qty").val(),
                    newVal = 1;

            if ($(this).is(".plus")) {
                newVal = parseInt(oldValue) + 1;
            } else if (oldValue > 1) {
                newVal = parseInt(oldValue) - 1;
            }
            $(qtyField).find(".qty").val(newVal);
        });
    }
    qnt_incre();
   
});

// Steps Slider
$('#steps').owlCarousel({
    loop: false,
    nav: false,
    dots: false,
    autoplayHoverPause: true,
    autoplay: false,
    margin: 30,
    responsive: {
        0: {
            items: 1,
            nav: false,
            dots: true,
            autoplay: true,
            loop: true,
        },
        576: {
            items: 2,
        },
        768: {
            items: 2,
        },
        1200: {
            items: 3,
        }
    }
});

// Popular
$('#popular').owlCarousel({
    loop: false,
    nav: true,
    navText: ['<img src="./images/icons/left.png">','<img src="./images/icons/right.png">'],
    dots: false,
    autoplayHoverPause: true,
    autoplay: false,
    margin: 5,
    responsive: {
        0: {
            items: 1,
            nav: false,
            dots: true,
            autoplay: true,
            loop: true,
        },
        576: {
            items: 2,
        },
        768: {
            items: 2,
        },
        1200: {
            items: 3,
        }
    }
});