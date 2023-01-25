console.log("Welcome to Spotify");
let songs = [
    { songName: "Dhindora-Theme Song", coverPath: "covers/1.jpg", singerName: "BHUVAN BAM", songTiming: "200" },
    { songName: "Dhindora-Theme Music", coverPath: "covers/1.jpg", singerName: "BHUVAN BAM", songTiming: "92" },
    { songName: "Dhindora-Bonus Audio", coverPath: "covers/1.jpg", singerName: "BHUVAN BAM", songTiming: "66" },
    { songName: "Sazish-Toota Ek Tara", coverPath: "covers/1.jpg", singerName: "BHUVAN BAM", songTiming: "280" },
    { songName: "Safar", coverPath: "covers/4.jpg", singerName: "BHUVAN BAM", songTiming: "268" },
    { songName: "Rahguzar", coverPath: "covers/5.jpg", singerName: "BHUVAN BAM", songTiming: "256" },
    { songName: "Ajnavee", coverPath: "covers/6.jpg", singerName: "BHUVAN BAM", songTiming: "265" },
    { songName: "Heer Ranjha", coverPath: "covers/7.jpg", singerName: "BHUVAN BAM", songTiming: "247" },
    { songName: "Sang Hoon Tere", coverPath: "covers/8.jpg", singerName: "BHUVAN BAM", songTiming: "284" },
    { songName: "Bas Mein", coverPath: "covers/9.jpg", singerName: "BHUVAN BAM", songTiming: "215" },
    { songName: "Sofia The First", coverPath: "covers/11.jpg", singerName: "DISNEY JUNIOR", songTiming: "52" },
    { songName: "Lovely", coverPath: "covers/12.jpg", singerName: "BILLIE EILISH & KHALID", songTiming: "200" },
];
for (let i = 0; i < songs.length; i++) {
    document.getElementById('container').innerHTML += `
    <div class="songItem">
                    <img alt="1">
                    <span class="songName">Let me Love You</span>
                    <span class="time" id="time${i}">
                        <span class="timeDuration">${songs[i].songTiming}s</span>
                    </span>
                    <span class="songlistplay"><span class="timestamp"> <i id="${i}"
                                class="far songItemPlay fa-play-circle"></i> </span></span>
                </div>`
}

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let time = 5;
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let singerName = document.getElementById('singerName');
let masterCoverName = document.getElementById('masterCoverName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songLength = document.getElementById('length');
let previous = document.getElementById('previous');
let next = document.getElementById('next');
let voiceChange = document.getElementById('volumeChanger');
let timeDuration = document.getElementsByClassName('timeDuration');
let volumes = document.getElementById('volumes');
let speedaudio = document.getElementById('speedaudio');
// audioElement.playbackRate=2.0;
// let bool = true;
// let songItemPlay=document.getElementsByClassName('songItemPlay');
let a = 1;
const speedometer = () => {
    document.getElementById('normalspeed').addEventListener('click', () => {
        a = 1;
        speedaudio.value = 250;
        audioElement.playbackRate = a;
    })
    document.getElementById('halfspeed').addEventListener('click', () => {
        a = 0.5;
        speedaudio.value = 250;
        audioElement.playbackRate = a;
    })
    document.getElementById('onenhalfspeed').addEventListener('click', () => {
        a = 1.5;
        speedaudio.value = 750;
        audioElement.playbackRate = a;
    })
    document.getElementById('twospeed').addEventListener('click', () => {
        a = 2;
        speedaudio.value = 1000;
        audioElement.playbackRate = a;
    })
}
const volumemeter = () => {
        volumes.value = 500;
        audioElement.volume = volumes.value / 1000;
}
speedometer();
volumemeter();
const resetSpeeds = () => {
    a = 1;
    speedaudio.value = 500;
    audioElement.playbackRate = 1;
}
songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});
songLength.innerText = Math.round(audioElement.currentTime) + "/" + Math.round(audioElement.duration) + "s";

// const volumeChanging=()=>{
//     voiceChange.addEventListener('volumechange',()=>{
//         if (value=0) {
//             audioElement.muted;
//         } else if (value=100) {
//             audioElement.unmuted;
//         }
//     })
// }
setInterval(() => {
    if (Math.round(audioElement.currentTime) == Math.round(audioElement.duration)) {
        if (songIndex >= songs.length - 1) {
            songIndex = 0;
            // songDuration();
        }
        else {
            songIndex += 1;
            // songDuration();
        }
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        masterCoverName.src = songs[songIndex].coverPath;
        singerName.innerText = songs[songIndex].singerName;
        audioElement.currentTime = 0;
        audioElement.play();
        audioElement.currentTime -= time;
        resetSpeeds();
        setInterval(() => {
            songLength.innerText = Math.round(audioElement.currentTime) + "/" + Math.round(audioElement.duration) + "s";
        }, 1000);
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle')
        songDuration();
        setTimeout(() => {
            Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
                songDuration();
                element.classList.remove('fa-pause-circle');
                element.classList.add('fa-play-circle');
            }, 100);
        })
    }
}, 2000);
const songDuration = () => {
    setTimeout(() => {
        masterPlay.addEventListener('click', () => {
            songLength.innerText = Math.round(audioElement.currentTime) + "/" + Math.round(audioElement.duration) + "s";
        });
        setInterval(() => {
            songLength.innerText = Math.round(audioElement.currentTime) + "/" + Math.round(audioElement.duration) + "s";
        }, 1000);
        setInterval(() => {
            songLength.innerText = Math.round(audioElement.currentTime) + "/" + Math.round(audioElement.duration) + "s";
        }, 1000);
    }, 10);
}
// Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        songDuration();
        // gif.style.opacity = 1;
        Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
            element.classList.remove('fa-pause-circle');
            element.classList.add('fa-play-circle');
            songDuration();
        })
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        // gif.style.opacity = 0;
        songDuration();
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', () => {
    // Update Seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 1000000000000);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 1000000000000;
})

volumes.addEventListener('change', () => {
    audioElement.volume = volumes.value / 1000;
})
speedaudio.addEventListener('change', () => {
    audioElement.playbackRate = speedaudio.value / 500;
})
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
        songDuration();
    })
}
const timeDurDis = () => {
    // songIndex=0;
    Array.from(document.getElementsByClassName('timeDuration')).forEach((element) => {
        // songDuration();
        // audioElement.src = `songs/${songIndex + 1}.mp3`;
        // element.innerText=Math.round(audioElement.duration);
        // element.innerText=450;

    });
}
// timeDurDis();
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        // if (audioElement.paused || audioElement.currentTime <= 0) {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        masterCoverName.src = songs[songIndex].coverPath;
        singerName.innerText = songs[songIndex].singerName;
        audioElement.currentTime = 0;
        audioElement.play();
        resetSpeeds();
        // gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

        // }else{
        //     makeAllPlays();
        //     e.target.classList.remove('fa-pause-circle');
        //     e.target.classList.add('fa-play-circle');
        //     // audioElement.currentTime = 0;
        //     audioElement.pause();
        //     // gif.style.opacity = 1;
        //     masterPlay.classList.remove('fa-pause-circle');
        //     masterPlay.classList.add('fa-play-circle');
        // }
    })
    element.addEventListener('click', () => {
        setTimeout(() => {
            songLength.innerText = Math.round(audioElement.currentTime) + "/" + Math.round(audioElement.duration) + "s";

        }, 100);
    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= songs.length - 1) {
        songIndex = 0;
        // songDuration();
    }
    else {
        songIndex += 1;
        // songDuration();
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    masterCoverName.src = songs[songIndex].coverPath;
    singerName.innerText = songs[songIndex].singerName;
    audioElement.currentTime = 0;
    audioElement.play();
    resetSpeeds();

    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle')
    songDuration();
})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
        // songDuration();
    }
    else {
        songIndex -= 1;
        // songDuration();
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    masterCoverName.src = songs[songIndex].coverPath;
    singerName.innerText = songs[songIndex].singerName;
    audioElement.currentTime = 0;
    audioElement.play();
    resetSpeeds();

    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle')
    songDuration();
})

document.getElementById('time_backward').addEventListener('click', () => {
    audioElement.currentTime -= time;
});
document.getElementById('time_forward').addEventListener('click', () => {
    audioElement.currentTime += time;
});

// Replay Function
const replays = () => {
    document.getElementById('replay').addEventListener('click', () => {
        if (document.getElementById('replay').innerText = 'REPLAY') {
            document.getElementById('replay').innerText = 'REPLAYER'
            if (songIndex >= songs.length - 1) {
                songIndex = 0;
                // songDuration();
            }
            else {
                songIndex += 1;
                // songDuration();
            }
            if (songIndex <= 0) {
                songIndex = 0;
                // songDuration();
            }
            else {
                songIndex -= 1;
                // songDuration();
            }
            setInterval(() => {
                if (Math.round(audioElement.currentTime) == Math.round(audioElement.duration)) {
                    audioElement.src = `songs/${songIndex + 1}.mp3`;
                    masterSongName.innerText = songs[songIndex].songName;
                    masterCoverName.src = songs[songIndex].coverPath;
                    singerName.innerText = songs[songIndex].singerName;
                    audioElement.play();
                    resetSpeeds();
                    setInterval(() => {
                        songLength.innerText = Math.round(audioElement.currentTime) + "/" + Math.round(audioElement.duration) + "s";
                    }, 1000);
                    masterPlay.classList.remove('fa-play-circle');
                    masterPlay.classList.add('fa-pause-circle')
                    songDuration();
                    setTimeout(() => {
                        Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
                            songDuration();
                            element.classList.remove('fa-pause-circle');
                            element.classList.add('fa-play-circle');
                        }, 100);
                    })
                }
            }, 1000);
        }
    })
}
replays();
window.addEventListener('keydown', (event) => {
    if (event.ctrlKey && event.key == "ArrowLeft") {
        if (songIndex <= 0) {
            songIndex = 0;
            // songDuration();
        }
        else {
            songIndex -= 1;
            // songDuration();
        }
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        masterCoverName.src = songs[songIndex].coverPath;
        singerName.innerText = songs[songIndex].singerName;
        audioElement.currentTime = 0;
        audioElement.play();
        audioElement.currentTime -= time;
        resetSpeeds();

        setInterval(() => {
            songLength.innerText = Math.round(audioElement.currentTime) + "/" + Math.round(audioElement.duration) + "s";
        }, 1000);
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle')
        songDuration();
    }
    else if (event.ctrlKey && event.key == "ArrowRight") {
        if (songIndex >= songs.length - 1) {
            songIndex = 0;
            // songDuration();
        }
        else {
            songIndex += 1;
            // songDuration();
        }
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        masterCoverName.src = songs[songIndex].coverPath;
        singerName.innerText = songs[songIndex].singerName;
        audioElement.currentTime = 0;
        audioElement.play();
        audioElement.currentTime -= time;
        resetSpeeds();

        setInterval(() => {
            songLength.innerText = Math.round(audioElement.currentTime) + "/" + Math.round(audioElement.duration) + "s";
        }, 1000);
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle')
        songDuration();
    }
})
window.addEventListener('keydown', (event) => {
    if (event.code == "Space") {
        if (audioElement.paused || audioElement.currentTime <= 0) {
            audioElement.play();
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
            songDuration();
            // gif.style.opacity = 1;
            setInterval(() => {
                songLength.innerText = Math.round(audioElement.currentTime) + "/" + Math.round(audioElement.duration) + "s";
            }, 1000);
            Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
                element.classList.remove('fa-pause-circle');
                element.classList.add('fa-play-circle');
                songDuration();
            })
        }
        else {
            audioElement.pause();
            masterPlay.classList.remove('fa-pause-circle');
            masterPlay.classList.add('fa-play-circle');
            // gif.style.opacity = 0;
            songDuration();
        }
    }
})
window.addEventListener('keydown', (event) => {
    if (event.key == "ArrowLeft") {
        audioElement.currentTime -= time;
    }
    else if (event.key == "ArrowRight") {
        audioElement.currentTime += time;
    }
})