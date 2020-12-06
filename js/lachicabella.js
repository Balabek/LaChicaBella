$(document).ready(function(){

    // Randomly re-order girls' thumbnails on refresh or browser launch
    $(".todays_bellas_selection_holder").html($(".todays_bellas_selection_holder .chica_thumb_holder").sort(function(){
        return Math.random()-0.5;
    }));


    // Animating the standard hamburger-menu
    $(".navbar-toggle").on("click", function () {
        $(this).toggleClass("active");
    });


    // Synchronized Double Profile Sliders
    $('.lcb_profile_main_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        touchMove: false,
        draggable: false,
        fade: true,
        asNavFor: '.lcb_mini_slider',
        responsive: [
            {
                breakpoint: 780,
                settings: {
                    touchMove: true,
                    draggable: true
                }
            }
        ]
    });

    $('.lcb_mini_slider').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.lcb_profile_main_slider',
        dots: false,
        arrows: false,
        centerMode: false,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 620,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
        ]
    });


});