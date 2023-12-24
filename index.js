const title = document.querySelector('.title')
const pre = document.querySelector('.pre')
const playpause = document.querySelector('.playpause')
const next = document.querySelector('.next')
const audio = document.querySelector('audio')

const songlist = [
    {
        path: "songs/dope shope.mp3",
        SongName: "Dope Shope",
    },
    {
        path: "songs/Mera Safar.mp3",
        SongName: "Mera Safar",
    },
    {
        path: "songs/nova.mp3",
        SongName: "Mai Udta Parinda",
    },
    {
        path: "songs/Safar.mp3",
        SongName: "Safar",
    },
    {
        path: "songs/volume1.mp3",
        SongName: "You Guess",
    },
];

let Song_Playing = false;

function playsong(){
    Song_Playing = true;
    audio.play();
    playpause.classList.add('active')
    playpause.innerHTML = '<ion-icon name="pause-circle-outline"></ion-icon>'
}

function pausesong(){
    Song_Playing = false;
    audio.pause();
    playpause.classList.remove('active')
    playpause.innerHTML = '<ion-icon name="play-circle-outline"></ion-icon>'
}

playpause.addEventListener("click", () => (Song_Playing ? 
    pausesong(): playsong()))

function loadSong(songlist){
    title.textContent = songlist.SongName;
    audio.src = songlist.path;
}

let i = 0;

loadSong(songlist[i]);

function preSong(){
    i--;
    if (i < 0){
        i = songlist.length - 1;
    }
    loadSong(songlist[i]);
    playsong();
}
pre.addEventListener("click", preSong)

function nextSong(){
    i++;
    if (i > songlist.length - 1){
        i = 0;
    }
    loadSong(songlist[i]);
    playsong();
}
next.addEventListener("click", nextSong)