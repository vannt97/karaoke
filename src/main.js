import gsap from 'gsap';
import './style.css'

function delay(seconds) {
    return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}

document.getElementById('play-icon').addEventListener('click', async () => {
    const video = document.getElementById('video-background');
    const disc = document.getElementById('disc');
    if (video.paused) {
        disc.classList.add('spinner');
        video.play();


        const tl = gsap.timeline();
        tl.to('.current-lyric:nth-child(1)', { backgroundPositionX: '-37%', duration: 2, delay: 5.5, ease: "power2.out" })
            .to('.current-lyric:nth-child(1)', { backgroundPositionX: '-67%', duration: 1.8, ease: "power2.out" })
            .to('.current-lyric:nth-child(1)', { backgroundPositionX: '-100%', duration: 1.8, })
            .to('.current-lyric:nth-child(1)', { display: 'none', duration: 0 })
            .to('.next-lyric:nth-child(1)', { display: 'none', duration: 0 })
            .to('.next-lyric:nth-child(2)', { display: 'block', duration: 0 })
            .to('.current-lyric:nth-child(2)', { display: 'block', backgroundPositionX: '-30%', duration: 1.5, ease: "power2.out" })
            .to('.current-lyric:nth-child(2)', { display: 'block', backgroundPositionX: '-52%', duration: 1.6, ease: "power2.out" })
            .to('.current-lyric:nth-child(2)', { display: 'block', backgroundPositionX: '-100%', duration: 3.6, ease: "power2.out" })
            .to('.current-lyric:nth-child(2)', { display: 'none', duration: 0 })
            .to('.next-lyric:nth-child(2)', { display: 'none', duration: 0 })
            .to('.next-lyric:nth-child(3)', { display: 'block', duration: 0 })
            .to('.current-lyric:nth-child(3)', { display: 'block', backgroundPositionX: '-46%', duration: 2.6, ease: "power2.out" })
            .to('.current-lyric:nth-child(3)', { display: 'block', backgroundPositionX: '-59%', duration: 1.6, ease: "power2.out" })
            .to('.current-lyric:nth-child(3)', { display: 'block', backgroundPositionX: '-100%', duration: 1.6 })
            .to('.current-lyric:nth-child(3)', { display: 'none', duration: 0 })
            .to('.next-lyric:nth-child(3)', { display: 'none', duration: 0 })
            .to('.next-lyric:nth-child(4)', { display: 'block', duration: 0 })
            .to('.current-lyric:nth-child(4)', { display: 'block', backgroundPositionX: '-42%', duration: 1, ease: "power2.out" })
            .to('.current-lyric:nth-child(4)', { display: 'block', backgroundPositionX: '-100%', duration: 1.9 })
            .to('.current-lyric:nth-child(4)', { display: 'none', duration: 0 })
            .to('.next-lyric:nth-child(4)', { display: 'none', duration: 0 })
            .to('.next-lyric:nth-child(5)', { display: 'block', duration: 0 })
            .to('.current-lyric:nth-child(5)', { display: 'block', backgroundPositionX: '-53%', duration: 2, ease: "power2.out" })
            .to('.current-lyric:nth-child(5)', { display: 'block', backgroundPositionX: '-100%', duration: 5, ease: "power2.out" })
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

const lyrics = [
    {
        text: "Giờ anh nơi đâu, em vẫn không tin mình xa nhau",
    },
    {
        text: "Biết yêu thương giờ xa xôi quá tình ơi thôi đành chôn giấu",
    },
    {
        text: "Giờ anh nơi đâu kí ức ấy đã nhạt màu",
    },
    {
        text: "Chỉ còn biết nhớ thương trong mơ",
    },
    {
        text: "Biết em đợi chờ đến bao giờ",
    }
]

const renderLyrics = () => {
    const html = lyrics.map((lyric, index) => `
        <div class="current-lyric ${index == 0 ? 'inline-block' : 'hidden'} text-xs text-[#00f0ff] font-bold red-sweep h-[20px] absolute top-0 left-0 w-full h-full">
              ${lyric.text}
            </div>
    `).join('');
    document.getElementById('current-lyrics').innerHTML = html;
}

const renderNextLyrics = () => {
    const nextLyrics = lyrics.slice(1);
    const html = nextLyrics.map((lyric, index) => `
        <div class="next-lyric ${index == 0 ? 'inline-block' : 'hidden'} text-xs text-[#a3a3a3] font-bold pt-2 absolute top-0 left-0 w-full h-full">
             ${lyric.text}
            </div>
    `).join('');
    document.getElementById('next-lyrics').innerHTML = html;
}


renderNextLyrics();
renderLyrics();
