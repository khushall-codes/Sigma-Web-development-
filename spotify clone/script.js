// let play = document.getElementById('play');
// let progressBar = document.getElementById('progressBar');
// let audio = new Audio('./audio/song.mp3');

const { audio } = require("./audio");

// play.addEventListener('click', () => {
//     if(audio.paused || audio.currentTime == 0){
//         audio.play();
//         play.classList.remove('fa-circle-play');
//         play.classList.add('fa-circle-pause');
//     }
//     else{
//         audio.pause();
//         play.classList.remove('fa-circle-pause');
//         play.classList.add('fa-circle-play');
//     }
// });    

// let play = document.getElementById("play");

// let audio = new Audio("song.mp3");

// play.addEventListener("click", () => {
//     if (audio.paused) {
//         audio.play();
//         play.classList.remove("fa-circle-play");
//         play.classList.add("fa-circle-pause");
//     } else {
//         audio.pause();
//         play.classList.remove("fa-circle-pause");
//         play.classList.add("fa-circle-play");
//     }
// });

// const play = document.getElementById("play");

// play.addEventListener("click", () => {
//     if (audio.paused) {
//         audio.play();
//         play.classList.remove("fa-circle-play");
//         play.classList.add("fa-circle-pause");
//     } else {
//         audio.pause();
//         play.classList.remove("fa-circle-pause");
//         play.classList.add("fa-circle-play");
//     }
// });

// let play = document.getElementById("play");

// let audio = new Audio("song.mp3");

// play.addEventListener("click", () => {
//     if (audio.paused) {
//         audio.play();
//         play.classList.remove("fa-circle-play");
//         play.classList.add("fa-circle-pause");
//     } else {
//         audio.pause();
//         play.classList.remove("fa-circle-pause");
//         play.classList.add("fa-circle-play");
//     }
// });

const play = document.getElementById("play");

const audio = new Audio("./songs/songmp3.mp3");

play.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();

        play.innerHTML =
          '<i class="player-btns fa-solid fa-circle-pause"></i>';
    } else {
        audio.pause();

        play.innerHTML =
          '<i class="player-btns fa-solid fa-circle-play"></i>';
    }
});