import gsap from 'gsap';
import './style.css'
import { mainContent } from './content';
import { playAnimationEverNight, playLyricDaQuenRoi, playLyricDiaNgucTranGian, playLyricDiaNgucTranGian2, playLyrics1800 } from './lyrics';
import { SONGS } from './song';
const songs = SONGS

const song = songs["8-100"];

function handleTimeUpdate() {
    const tl = gsap.timeline();
    if (song.song_name === "Đã Quên Rồi") {
        playLyricDaQuenRoi(tl)
    }

    if (song.song_name === "Địa Ngục Trần Gian - Remix") {
        playLyricDiaNgucTranGian(tl)
    }

    if (song.song_name === "Địa Ngục Trần Gian + Anh Vui - Remix") {
        playLyricDiaNgucTranGian2(tl)
    }

    if(song.song_name === "bbno$ - 1-800 (ft. ironmouse)"){
        playLyrics1800(tl);
        const everNightTimeline = gsap.timeline();
        playAnimationEverNight(everNightTimeline);
    }

}

document.getElementById('app').innerHTML = mainContent(song)

document.getElementById('play-icon').addEventListener('click', async (e) => {
    const video = document.getElementById('video-background');
    const disc = document.getElementById('disc');
    if (video.paused) {
        disc.classList.add('spinner');
        video.play();
        e.currentTarget.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="${song.text_primary}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pause-icon lucide-pause"><rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/></svg>
        `;
        handleTimeUpdate();
    } else {
        disc.classList.remove('spinner');
        video.pause();
    }
});

document.getElementById('video-background')?.addEventListener('loadedmetadata', function () {
    const video = document.getElementById('video-background');
    const { duration } = video; // đơn vị: giây (float)

    const durationElement = document.getElementById('duration');
    if (durationElement) {
        durationElement.textContent = formatTime(duration);
    }

});

document.getElementById('video-background')?.addEventListener('timeupdate', () => {
    const currentTimeEl = document.getElementById('current-time');
    const video = document.getElementById('video-background');
    currentTimeEl.textContent = formatTime(video.currentTime);

    const percent = (video.currentTime / video.duration) * 100;
    document.getElementById('progress-bar').style.width = percent + '%';
});

function formatTime(seconds) {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor(seconds % 60);

    if (h > 0) {
        return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    } else {
        return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    }
}

const renderLyrics = () => {
    let html = song.lyrics.map((lyric, index) => `
        <div  class="current-lyric ${index == 0 ? 'inline-block' : 'hidden'}  text-xs font-bold red-sweep h-[20px] absolute top-0 left-0 w-full h-full">
            <div class="hidden absolute bottom-[110%] left-[80%]">${index + 1}</div>      
        <div style="font-weight: 900;
      color: ${song.accent_primary};
      ${song.song_name !== "bbno$ - 1-800 (ft. ironmouse)" && `background: linear-gradient(to right, ${song.text_primary} 50%, ${song.accent_primary} 50%);
      background-size: 200% 100%;
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;`}
      background-position: -0% 0%;" class="current-lyric-color">${lyric.text}</div>
            </div>
    `).join('');
    document.getElementById('current-lyrics').innerHTML = html;
}

const renderNextLyrics = () => {
    const nextLyrics = song.lyrics.slice(1);
    const html = nextLyrics.map((lyric, index) => `
        <div style="color: ${song.text_secondary};" class="next-lyric ${index == 0 ? 'inline-block' : 'hidden'} text-xs  font-bold pt-2 absolute top-0 left-0 w-full h-full">
             ${lyric.text}
            </div>
    `).join('');
    document.getElementById('next-lyrics').innerHTML = html;
}

const setupUI = () => {
    const html = `
        <div id="ever-night" class="absolute bottom-0 translate-y-50 translate-x-100 -left-5 w-[200px] z-10 flex">
            <img class="" src="gif-3.gif"/>
            <img class="relative -left-10" src="gif-5.gif"/>
            <img class="relative -left-25" src="gif-4.gif"/>
            </div>
    `
    const divCreator = document.createElement('div')
    divCreator.innerHTML = html;
    const app = document.getElementById('app')
    app.append(divCreator)

    const discHtml = `<div id="disc-ever-night" class="absolute bottom-0 left-[50%] -translate-x-1/2 translate-y-[190px] w-[200px]">
        <img src="gif-2-transparent.gif"/>
    </div>`;
    const divDiscCreator = document.createElement("div");
    divDiscCreator.innerHTML = discHtml;
    const discEl = document.getElementById('disc');
    discEl.append(divDiscCreator)
}


renderNextLyrics();
renderLyrics();
setupUI();



