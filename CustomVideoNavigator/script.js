let playPause = document.getElementById('play-pause')
let video = document.getElementById('video')
let seekBar = document.querySelector('.seekBar')
let sliderID = document.querySelector('#sliderID')
document.getElementById('video').style.width = document.querySelector('.seekBar').style.width
document.getElementById('NavigationVideoID').style.opacity = 0;
document.getElementById('video').setAttribute("poster", "assets\\img\\HarryBhai.png");
video.src = "https://drive.google.com/uc?export=view&id=15FGQ_Bx7l0JXp2C32lRS3fL7QQF9ijmR"
// opacity the user defined video controls
// video.setAttribute('data-state', 'visible');

const seekBarUpdate = () => {
    seekVal = (video.currentTime / video.duration) * 100;
    seekVal0 = (video.currentTime / video.duration) * 100;
    // videoCompleteMain=(seekVal0/100)*video.duration
    document.getElementById('seekTime').style.width = `${seekVal}%`
    document.getElementById('sliderID').style.left = `${seekVal0 - 0.2}%`
}
// const seekBarUserClickUpdate=()=>{
//     let timelineWidth=document.getElementById('seekBarID').clientWidth;
//     console.log(timelineWidth, ((e.offsetX/timelineWidth)*video.duration))
//     // console.log(((e.offsetX/timelineWidth)*video.duration))
//     document.getElementById('video').currentTime=((e.offsetX/timelineWidth)*video.duration)
//     // let minCursor=426;
//     // let maxCursor=1173;
//     // positioning=(maxCursor-minCursor)
//     // // positioning=maxCursor-minCursor;
//     // // document.getElementById('sliderID')
//     // var e = window.event;
//     // ePositionCursor=e.clientX;
//     // ePositionCursorMain=ePositionCursor-minCursor
//     // seekPercent=(ePositionCursorMain/positioning)*100
//     // seekPercentMain=(seekPercent/100)*98
//     // console.log(ePositionCursorMain)
//     // console.log(seekPercent)
//     // console.log(seekPercentMain)
//     // document.getElementById('sliderID').style.left = `${seekPercentMain}%`

//     // document.getElementById('sliderID').style.left=`${clientX}%`
// }

const PlayNPause = () => {
    if (video.paused || video.currentTime <= 0) {
        playPause.innerHTML = `<img src="assets\\img\\pause-solid.svg" alt="">`
        document.getElementById('Big-Play-Pause').innerHTML = `<img src="assets\\img\\circle-pause-regular.svg" alt="">`
        document.getElementById('Big-Play-Pause').style.opacity = 0
        video.play()
    } else {
        playPause.innerHTML = `<img src="assets\\img\\play-solid.svg" alt="">`
        document.getElementById('Big-Play-Pause').innerHTML = `<img src="assets\\img\\circle-play-regular.svg" alt="">`
        document.getElementById('Big-Play-Pause').style.opacity = 1
        video.pause()
    }
}
document.getElementById('seekBarID').addEventListener('click', (e) => {
    let timelineWidth = document.getElementById('seekBarID').clientWidth;
    // document.getElementById('seekBarID').style.width=timelineWidth
    document.getElementById('video').currentTime = ((e.offsetX / timelineWidth) * video.duration)
    // console.log(timelineWidth, ((e.offsetX / timelineWidth) * video.duration))
    // console.log(((e.offsetX/timelineWidth)*video.duration))
})
document.getElementById('NavigationVideoID').addEventListener('mouseenter', () => {
    if (document.getElementById('NavigationVideoID').style.opacity == 0) {
        document.getElementById('NavigationVideoID').style.opacity = 1
    }
})

document.getElementById('NavigationVideoID').addEventListener('mouseleave', () => {
    document.getElementById('video').addEventListener('mouseleave', () => {
        if (document.getElementById('NavigationVideoID').style.opacity == 1 && !video.paused) {
            document.getElementById('NavigationVideoID').style.opacity = 0
        }
    })
})
document.getElementById('video').addEventListener('click', () => {
    PlayNPause();
})
document.getElementById('seekBarID').addEventListener('mousemove', () => {
    document.getElementById('sliderID').style.opacity = 1
})
document.getElementById('seekBarID').addEventListener('mouseenter', () => {
    document.getElementById('sliderID').style.opacity = 1
})
document.getElementById('seekBarID').addEventListener('mouseleave', () => {
    document.getElementById('sliderID').style.opacity = 0
})


document.getElementById('seekTime').addEventListener('mousemove', () => {
    document.getElementById('sliderID').style.opacity = 1
})
document.getElementById('seekTime').addEventListener('mouseenter', () => {
    document.getElementById('sliderID').style.opacity = 1
})
document.getElementById('seekTime').addEventListener('mouseleave', () => {
    document.getElementById('sliderID').style.opacity = 0
})


document.getElementById('sliderID').addEventListener('mouseleave', () => {
    document.getElementById('sliderID').style.opacity = 0
})
document.getElementById('sliderID').addEventListener('mousemove', () => {
    document.getElementById('sliderID').style.opacity = 1
})
document.getElementById('sliderID').addEventListener('mouseenter', () => {
    document.getElementById('sliderID').style.opacity = 1
})
document.getElementById('video').addEventListener('mousemove', () => {
    // document.getElementById('video').addEventListener('mouseleave', () => {
    if (document.getElementById('NavigationVideoID').style.opacity == 0) {
        document.getElementById('NavigationVideoID').style.opacity = 1
    }
    // })
})
document.getElementById('NavigationVideoID').addEventListener('mouseleave', () => {
    if (document.getElementById('NavigationVideoID').style.opacity == 1 && !video.paused) {
        document.getElementById('NavigationVideoID').style.opacity = 0
    }
})
document.getElementById('video').addEventListener('mouseenter', () => {
    // document.getElementById('NavigationVideoID').style.opacity = 1
    if (document.getElementById('NavigationVideoID').style.opacity == 0) {
        document.getElementById('NavigationVideoID').style.opacity = 1
    }
})
document.getElementById('video').addEventListener('mouseleave', () => {
    // document.getElementById('NavigationVideoID').style.opacity = 0
    if (document.getElementById('NavigationVideoID').style.opacity == 1 && !video.paused) {
        document.getElementById('NavigationVideoID').style.opacity = 0
    }
})
document.getElementById('video').addEventListener('mouseenter', () => {
    document.querySelector('#Big-Play-Pause img').style.height = '100px';
    document.querySelector('#Big-Play-Pause img').style.width = '100px';
})
document.getElementById('video').addEventListener('mouseover', () => {
    document.querySelector('#Big-Play-Pause img').style.height = '100px';
    document.querySelector('#Big-Play-Pause img').style.width = '100px';
})
document.getElementById('video').addEventListener('mouseleave', () => {
    document.querySelector('#Big-Play-Pause img').style.height = '80px';
    document.querySelector('#Big-Play-Pause img').style.width = '80px';
})
document.getElementById('Big-Play-Pause').addEventListener('mouseenter', () => {
    document.querySelector('#Big-Play-Pause img').style.height = '100px';
    document.querySelector('#Big-Play-Pause img').style.width = '100px';
})
document.getElementById('Big-Play-Pause').addEventListener('mouseover', () => {
    document.querySelector('#Big-Play-Pause img').style.height = '100px';
    document.querySelector('#Big-Play-Pause img').style.width = '100px';
})
document.getElementById('Big-Play-Pause').addEventListener('mouseleave', () => {
    document.querySelector('#Big-Play-Pause img').style.height = '80px';
    document.querySelector('#Big-Play-Pause img').style.width = '80px';
})
document.getElementById('NavigationVideoID').addEventListener('mouseenter', () => {
    document.querySelector('#Big-Play-Pause img').style.height = '100px';
    document.querySelector('#Big-Play-Pause img').style.width = '100px';
})
document.getElementById('NavigationVideoID').addEventListener('mouseover', () => {
    document.querySelector('#Big-Play-Pause img').style.height = '100px';
    document.querySelector('#Big-Play-Pause img').style.width = '100px';
})
document.getElementById('NavigationVideoID').addEventListener('mouseleave', () => {
    document.querySelector('#Big-Play-Pause img').style.height = '80px';
    document.querySelector('#Big-Play-Pause img').style.width = '80px';
})
document.getElementById('Big-Play-Pause').addEventListener('mouseenter', () => {
    // document.getElementById('NavigationVideoID').style.opacity = 1
    if (document.getElementById('NavigationVideoID').style.opacity == 0) {
        document.getElementById('NavigationVideoID').style.opacity = 1
    }
})
document.getElementById('Big-Play-Pause').addEventListener('mouseleave', () => {
    // document.getElementById('NavigationVideoID').style.opacity = 0
    if (document.getElementById('NavigationVideoID').style.opacity == 1 && !video.paused) {
        document.getElementById('NavigationVideoID').style.opacity = 0
    }
})
document.getElementById('video').addEventListener('timeupdate', () => {
    seekBarUpdate();
    if (video.ended) {
        playPause.innerHTML = `<img src="assets\\img\\rotate-left-solid.svg" alt="">`
        document.getElementById('Big-Play-Pause').innerHTML = `<img src="assets\\img\\rotate-left-solid0.svg" alt="">`
        document.getElementById('video').setAttribute("poster", "assets\\img\\HarryBhai.png");
        document.getElementById('Big-Play-Pause').style.opacity = 1
        document.getElementById('NavigationVideoID').style.opacity = 1
    }
})

document.getElementById('play-pause').addEventListener('click', () => {
    PlayNPause();
});
document.getElementById('Big-Play-Pause').addEventListener('click', () => {
    PlayNPause();
});

document.getElementById('backward5s').addEventListener('click', () => {
    video.currentTime -= 5
})
document.getElementById('forward5s').addEventListener('click', () => {
    video.currentTime += 5
})
// document.getElementById('video').addEventListener('')
document.getElementById('video').addEventListener('contextmenu', function (ev) {
    ev.preventDefault();
    // alert('success!');
    // return false;
});