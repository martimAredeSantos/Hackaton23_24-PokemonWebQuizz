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

})
