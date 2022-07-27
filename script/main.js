let menuBtn = document.querySelector('.burger');
let menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})

/* if (menu.classList.contains('.active')) {
    let body = document.body;
    body.style.overflow = 'hidden';
} */


// slider
$(document).ready(function () {
    /* $('.bestProduct_body').slick({
        arrows: false,
        infinite: false,
        // autoplay: true
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    }); */
    
    /* $('.ourProducts_item').slick({

    }); */

});

