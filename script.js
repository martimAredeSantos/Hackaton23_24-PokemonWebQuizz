$(document).ready(function () {
    const song = new Audio('resources/Song1.mp3');
    const songButton = document.querySelector('.musicBtn');
    

    songButton.addEventListener('click', () => {
        if (song.paused) {
            song.loop = true; 
            song.play();
            songButton.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            song.pause();
            songButton.innerHTML = '<i class="fas fa-play"></i>';
        }

    });


    $("#bulbasaur").on("click" ,function(){
        $(".choose-pokemon").remove();
        $(".full-page").css({
            "filter": "none",
            "pointer-events": "all"
        });
        $(".pokemon-bulbasaur").css({"visibility" : "visible"});
        localStorage.setItem('pokemon', "bulbasaur");
})

    $(".charmander").on("click" ,function(){
    $(".choose-pokemon").remove();
    $(".full-page").css({
        "filter": "none",
        "pointer-events": "all"
    });
    $(".pokemon-charmander").css({"visibility" : "visible"});
    localStorage.setItem('pokemon', "charmander");
})
$(".squirtle").on("click" ,function(){
    $(".choose-pokemon").remove();
    $(".full-page").css({
        "filter": "none",
        "pointer-events": "all"
    });
    $(".pokemon-squirtle").css({"visibility" : "visible"});
    localStorage.setItem('pokemon', "squirtle");
})

})
