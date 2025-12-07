export const mainContent = (song) => {
    return `<div class="max-w-[440px] mx-auto">
<div class="absolute top-0 left-0 w-full h-full" style="color: ${song.text_primary};">
      <img class="h-full w-full object-cover blur-lg" src="${song.background_image}" alt="">
    </div>
    <div class="absolute top-0 left-0 w-full h-full" style="background-color: ${song.background}; opacity: ${song.background_opacity};"></div>
    <div class="relative">
      <div class="pb-6" style="color: ${song.text_secondary};">
        <h1 class="text-center pb-1 font-bold pt-4 text-3xl">BÀI HÁT</h1>
        <p class="font-medium text-center text-lg" style="color: ${song.text_primary};">${song.song_name}</p>
      </div>
      <div class="w-[96%] mx-auto">
        <div id="disc_wrapper" class="relative z-1 aspect-square mb-8">
          <div id="disc" class="relative w-full h-full bg-white rounded-full overflow-hidden " style="box-shadow: 
          ${song.box_shadow_disc};">
            <img src="${song.background_image}" alt=""
              class="w-full h-full ${song.img_class_name}" />
          </div>
        </div>
        <div class="relative z-20">
          <div class="relative w-full h-[4px]" style="background-color: ${song.track_color}; ">
            <div id="progress-bar" class="absolute top-0 left-0 h-full w-0" style="background-color: ${song.bar_color};"></div>
          </div>
          <div id="current-time" class="absolute top-[100%] left-0 text-sm pt-1" style="color: ${song.text_secondary};">
            00:00
          </div>
          <div id="duration" class="absolute top-[100%] right-0 text-sm pt-1" style="color: ${song.text_secondary};">
            00:00
          </div>
        </div>
        <div class="mt-8 text-center">
          <div class="flex gap-2 justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="${song.accent_secondary}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="lucide lucide-mic-vocal-icon lucide-mic-vocal">
              <path d="m11 7.601-5.994 8.19a1 1 0 0 0 .1 1.298l.817.818a1 1 0 0 0 1.314.087L15.09 12" />
              <path
                d="M16.5 21.174C15.5 20.5 14.372 20 13 20c-2.058 0-3.928 2.356-6 2-2.072-.356-2.775-3.369-1.5-4.5" />
              <circle cx="16" cy="7" r="5" />
            </svg>
            <p class="relative z-10 font-semibold" style="color: ${song.text_primary};">
              Câu hiện tại
            </p>
          </div>
          <div id="current-lyrics" class="mt-2 w-full relative h-[24px]">

          </div>
        </div>
        <div class="mt-2 text-center">
          <div class="flex gap-2 justify-center items-center">
            <div class="rounded-[2px]" style="background-color: ${song.accent_primary};">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white"
                stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="lucide lucide-step-forward-icon lucide-step-forward">
                <path d="M10.029 4.285A2 2 0 0 0 7 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z" />
                <path d="M3 4v16" />
              </svg>
            </div>
            <p class="relative z-10 font-semibold" style="color: ${song.text_primary};">Câu tiếp theo</p>

          </div>
          <div id="next-lyrics" class="relative h-[24px]">
            <div class="next-lyric text-xs relative font-bold mt-2" style="color: ${song.text_secondary};">
              Biết yêu thương giờ xa xôi quá tình ơi thôi đành chôn giấu
            </div>
          </div>
        </div>
        <div class="mt-6">
          <div class="flex items-center justify-center gap-6 relative">
            <div class="absolute top-[50%] -translate-y-1/2 left-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke="${song.text_primary}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="lucide lucide-shuffle-icon lucide-shuffle">
                <path d="m18 14 4 4-4 4" />
                <path d="m18 2 4 4-4 4" />
                <path d="M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22" />
                <path d="M2 6h1.972a4 4 0 0 1 3.6 2.2" />
                <path d="M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45" />
              </svg>
            </div>
            <div class="absolute top-[50%] -translate-y-1/2 right-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke="${song.text_primary}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="lucide lucide-repeat-icon lucide-repeat">
                <path d="m17 2 4 4-4 4" />
                <path d="M3 11v-1a4 4 0 0 1 4-4h14" />
                <path d="m7 22-4-4 4-4" />
                <path d="M21 13v1a4 4 0 0 1-4 4H3" />
              </svg>
            </div>
            <div class="rotate-y-180">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="${song.text_primary}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="lucide lucide-skip-forward-icon lucide-skip-forward">
                <path d="M21 4v16" />
                <path d="M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z" />
              </svg>
            </div>
            <div>
              <div id="play-icon" class="cursor-pointer p-3 border-2 rounded-full" style="border-color: ${song.text_primary};">
                
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="${song.text_primary}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-play-icon lucide-play"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"/></svg>
              </div>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="${song.text_primary}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="lucide lucide-skip-forward-icon lucide-skip-forward">
                <path d="M21 4v16" />
                <path d="M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="fixed top-0 left-0 z-10">
      <video id="video-background" playsinline class="w-0 h-0">
        <source src="${song.music_file}" type="video/mp4">
      </video>
    </div></div>`
}