$(document).ready(function(){

    // Randomly re-order girls' thumbnails on refresh or browser launch
    $(".todays_bellas_selection_holder").html($(".todays_bellas_selection_holder .chica_thumb_holder").sort(function(){
        return Math.random()-0.3;
    }));













});