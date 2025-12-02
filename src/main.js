import gsap from 'gsap';
import './style.css'
const songs = {
    "da_quen_roi": {
        song_name: "Đã Quên Rồi",
        background_image: `hinh-nen-dien-thoai-mau-tim-cute-001.webp`,
        background: "#000",
        background_opacity: "0.9",
        text_secondary: "#a3a3a3",
        text_primary: "#e4e4e7",
        box_shadow_disc: `0 0 20px rgba(139, 92, 246, 0.6),
    0 0 40px rgba(139, 92, 246, 0.4),
    0 0 80px rgba(139, 92, 246, 0.3);`,
        accent_primary: "#00f0ff",
        accent_secondary: "#8b5cf6",
        bar_color: "#ffffff",
        music_file: "da_quen_roi.mp4",
        img_class_name: "translate-y-[20px] scale-[1.1] object-contain",
        lyrics: [
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
        ],
        track_color: "#a3a3a3",

    },
    "dia_nguc_tran_gian": {
        song_name: "Địa Ngục Trần Gian - Remix",
        background_image: "nang-tho-bac-ninh-dep-ngot-ngao-don-giang-sinh-somdocx-1638204418966.jpeg.webp",
        background: "#FDFDFD",
        background_opacity: "0.9",
        text_secondary: "#444444",
        text_primary: "#1A1A1A",
        box_shadow_disc: `0 0 20px rgba(196, 30, 58, 0.6),
    0 0 40px rgba(196, 30, 58, 0.4),
    0 0 80px rgba(196, 30, 58, 0.3);`,
        accent_primary: "#E8B923",
        accent_secondary: "#C41E3A",
        bar_color: "#C41E3A",
        music_file: "dia_nguc_tran_gian_only.mp4",
        img_class_name: "object-cover",
        lyrics: [
            {
                text: "Người cạnh bên mà chẳng thể hiểu được",
            },
            {
                text: "Làm cách nào có thể giữ lại",
            },
            {
                text: "Bão tố phong ba không bằng chia tay",
            },
            {
                text: "Chìm xuống dưới vực sâu này",
            },
            {
                text: "Dễ nhớ mau quên những lời mây bay",
            },
            {
                text: "Chỉ nhận lại những đắng cay",
            },
            {
                text: "Còn điều gì để khiến anh vui trở lại",
            },
            {
                text: "Em biến nơi anh thành địa ngục trần gian",
            },
        ],
        track_color: "#F8F4F0",
    },
    "dia_nguc_tran_gian_anh_vui": {
        song_name: "Địa Ngục Trần Gian + Anh Vui - Remix",
        background_image: "camfashion.vn-wp-content-uploads-2022-09-_concept-chup-anh-noel-giang-sinh-dep-ben-cay-thong-noel.jpg",
        background: "#0F0F0F",
        background_opacity: "0.9",
        text_secondary: "#F9E19D",
        text_primary: "#FFFFFF",
        box_shadow_disc: `0 0 20px rgba(212, 175, 55, 0.6),
                0 0 40px rgba(212, 175, 55, 0.4),
                0 0 80px rgba(212, 175, 55, 0.3);`,
        accent_primary: "#D4AF37",
        accent_secondary: "#D4AF37",
        bar_color: "#F9E19D",
        music_file: "dia_nguc_tran_gian.mp4",
        img_class_name: "object-cover",
        lyrics: [
            {
                text: "Người cạnh bên mà chẳng thể hiểu được",
            },
            {
                text: "Làm cách nào có thể giữ lại",
            },
            {
                text: "Bão tố phong ba không bằng chia tay",
            },
            {
                text: "Chìm xuống dưới vực sâu này",
            },
            {
                text: "Dễ nhớ mau quên những lời mây bay",
            },
            {
                text: "Chỉ nhận lại những đắng cay",
            },
            {
                text: "Còn điều gì để khiến anh vui trở lại",
            },
            {
                text: "Em biến nơi anh thành địa ngục trần gian",
            },
            {
                text: "Anh vui đến nổi nghẹn ngào",
            },
            {
                text: "Nhìn người ta cầm nhẫn cưới trao"
            },
            {
                text: "Anh cũng có chút tự hào"
            },
            {
                text: "Vì người mình thương hạnh phúc nhường nào"
            },
            {
                text: "Áo cưới em màu trắng tinh"
            },
            {
                text: "Cô gái anh thật rất xinh"
            },
            {
                text: "Giật mình cứ ngỡ anh đứng cạnh em trong lễ cưới"
            },
            {
                text: "Anh vui sao nước mắt cứ tuôn trào"
            },
            {
                text: "Chẳng phải như thế quá tốt hay sao"
            },
            {
                text: "Anh ta đáng giá nhường nào"
            },
            {
                text: "Ngược lại nhìn anh trông chẳng ra sao"
            },
            {
                text: "Cũng đúng thôi !"
            },
            {
                text: "Anh làm gì , xứng đáng với em "
            }
        ],
        track_color: "rgba(212,175,55,0.1)",
    }
}

const song = songs["dia_nguc_tran_gian"];

function handleTimeUpdate() {
    const tl = gsap.timeline();
    if (song.song_name === "Đã Quên Rồi") {
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
    }

    if (song.song_name === "Địa Ngục Trần Gian - Remix") {
        tl.to('.current-lyric:nth-child(1)', {
            duration: 2.4, onStart: () => {
                gsap.to('.current-lyric:nth-child(1) .current-lyric-color', { backgroundPositionX: '-100%', duration: 3.4 })
                gsap.to('.current-lyric:nth-child(2) .current-lyric-color', { backgroundPositionX: '-100%', duration: 1.8, delay: 2.2 })
            }
        })
            .to('.current-lyric:nth-child(1)', { display: 'none', duration: 0 })
            .to('.next-lyric:nth-child(1)', { display: 'none', duration: 0 })
            .to('.next-lyric:nth-child(2)', { display: 'block', duration: 0 })
            .to('.current-lyric:nth-child(2)', {
                display: 'block', duration: 1, ease: "power2.out", onStart: () => {
                    gsap.to('.current-lyric:nth-child(3) .current-lyric-color', { backgroundPositionX: '-100%', duration: 2.8, delay: 1 })
                }
            })
            .to('.current-lyric:nth-child(2)', { display: 'none', duration: 0 })
            .to('.next-lyric:nth-child(2)', { display: 'none', duration: 0 })
            .to('.next-lyric:nth-child(3)', { display: 'block', duration: 0 })
            .to('.current-lyric:nth-child(3)', {
                display: 'block', duration: 1.9, ease: "power2.out", onStart: () => {
                    gsap.to('.current-lyric:nth-child(4) .current-lyric-color', { backgroundPositionX: '-100%', duration: 2.6, delay: 1.6 })

                }
            })
            .to('.current-lyric:nth-child(3)', { display: 'none', duration: 0 })
            .to('.next-lyric:nth-child(3)', { display: 'none', duration: 0 })
            .to('.next-lyric:nth-child(4)', { display: 'block', duration: 0 })
            .to('.current-lyric:nth-child(4)', {
                display: 'block', duration: 1.4, ease: "power2.out", onStart: () => {
                    gsap.to('.current-lyric:nth-child(5) .current-lyric-color', { backgroundPositionX: '-100%', duration: 3, delay: 1.2 })

                }
            })
            .to('.current-lyric:nth-child(4)', { display: 'none', duration: 0 })
            .to('.next-lyric:nth-child(4)', { display: 'none', duration: 0 })
            .to('.next-lyric:nth-child(5)', { display: 'block', duration: 0 })
            .to('.current-lyric:nth-child(5)', {
                display: 'block', duration: 1.8, ease: "power2.out", onStart: () => {
                    gsap.to('.current-lyric:nth-child(6) .current-lyric-color', { backgroundPositionX: '-100%', duration: 2.6, delay: 1.6 })

                }
            })
            .to('.current-lyric:nth-child(5)', { display: 'none', duration: 0 })
            .to('.next-lyric:nth-child(5)', { display: 'none', duration: 0 })
            .to('.next-lyric:nth-child(6)', { display: 'block', duration: 0 })
            .to('.current-lyric:nth-child(6)', {
                display: 'block', duration: 1.8, ease: "power2.out", onStart: () => {
                    gsap.to('.current-lyric:nth-child(7) .current-lyric-color', { backgroundPositionX: '-100%', duration: 4, delay: 1.6 })

                }
            })
            .to('.current-lyric:nth-child(6)', { display: 'none', duration: 0 })
            .to('.next-lyric:nth-child(6)', { display: 'none', duration: 0 })
            .to('.next-lyric:nth-child(7)', { display: 'block', duration: 0 })
            .to('.current-lyric:nth-child(7)', {
                display: 'block', duration: 2.4, ease: "power2.out", onStart: () => {
                    gsap.to('.current-lyric:nth-child(8) .current-lyric-color', { backgroundPositionX: '-100%', duration: 4, delay: 2.2 })

                }
            })
            .to('.current-lyric:nth-child(7)', { display: 'none', duration: 0 })
            .to('.next-lyric:nth-child(7)', { display: 'none', duration: 0 })
            .to('.next-lyric:nth-child(8)', { display: 'block', duration: 0 })
            .to('.current-lyric:nth-child(8)', {
                display: 'block', duration: 2, ease: "power2.out", onStart: () => {
                }
            })
    }

    if (song.song_name === "Địa Ngục Trần Gian + Anh Vui - Remix") {
        tl.to('.current-lyric:nth-child(1)', {
            duration: 2.4, onStart: () => {
                gsap.to('.current-lyric:nth-child(1) .current-lyric-color', { backgroundPositionX: '-100%', duration: 3.4 })
                gsap.to('.current-lyric:nth-child(2) .current-lyric-color', { backgroundPositionX: '-100%', duration: 1.8, delay: 2.2 })
            }
        })
            .to('.current-lyric:nth-child(1)', { display: 'none', duration: 0 })
            .to('.next-lyric:nth-child(1)', { display: 'none', duration: 0 })
            .to('.next-lyric:nth-child(2)', { display: 'block', duration: 0 })
            .to('.current-lyric:nth-child(2)', {
                display: 'block', duration: 1, ease: "power2.out", onStart: () => {
                    gsap.to('.current-lyric:nth-child(3) .current-lyric-color', { backgroundPositionX: '-100%', duration: 2.8, delay: 1 })
                }
            })
            .to('.current-lyric:nth-child(2)', { display: 'none', duration: 0 })
            .to('.next-lyric:nth-child(2)', { display: 'none', duration: 0 })
            .to('.next-lyric:nth-child(3)', { display: 'block', duration: 0 })
            .to('.current-lyric:nth-child(3)', {
                display: 'block', duration: 1.9, ease: "power2.out", onStart: () => {
                    gsap.to('.current-lyric:nth-child(4) .current-lyric-color', { backgroundPositionX: '-100%', duration: 2.6, delay: 1.6 })

                }
            })
            .to('.current-lyric:nth-child(3)', { display: 'none', duration: 0 })
            .to('.next-lyric:nth-child(3)', { display: 'none', duration: 0 })
            .to('.next-lyric:nth-child(4)', { display: 'block', duration: 0 })
            .to('.current-lyric:nth-child(4)', {
                display: 'block', duration: 1.4, ease: "power2.out", onStart: () => {
                    gsap.to('.current-lyric:nth-child(5) .current-lyric-color', { backgroundPositionX: '-100%', duration: 3, delay: 1.2 })

                }
            })
            .to('.current-lyric:nth-child(4)', { display: 'none', duration: 0 })
            .to('.next-lyric:nth-child(4)', { display: 'none', duration: 0 })
            .to('.next-lyric:nth-child(5)', { display: 'block', duration: 0 })
            .to('.current-lyric:nth-child(5)', {
                display: 'block', duration: 1.8, ease: "power2.out", onStart: () => {
                    gsap.to('.current-lyric:nth-child(6) .current-lyric-color', { backgroundPositionX: '-100%', duration: 2.6, delay: 1.6 })

                }
            })
            .to('.current-lyric:nth-child(5)', { display: 'none', duration: 0 })
            .to('.next-lyric:nth-child(5)', { display: 'none', duration: 0 })
            .to('.next-lyric:nth-child(6)', { display: 'block', duration: 0 })
            .to('.current-lyric:nth-child(6)', {
                display: 'block', duration: 1.8, ease: "power2.out", onStart: () => {
                    gsap.to('.current-lyric:nth-child(7) .current-lyric-color', { backgroundPositionX: '-100%', duration: 4, delay: 1.6 })

                }
            })
            .to('.current-lyric:nth-child(6)', { display: 'none', duration: 0 })
            .to('.next-lyric:nth-child(6)', { display: 'none', duration: 0 })
            .to('.next-lyric:nth-child(7)', { display: 'block', duration: 0 })
            .to('.current-lyric:nth-child(7)', {
                display: 'block', duration: 2.4, ease: "power2.out", onStart: () => {
                    gsap.to('.current-lyric:nth-child(8) .current-lyric-color', { backgroundPositionX: '-100%', duration: 4, delay: 2.2 })

                }
            })
            .to('.current-lyric:nth-child(7)', { display: 'none', duration: 0 })
            .to('.next-lyric:nth-child(7)', { display: 'none', duration: 0 })
            .to('.next-lyric:nth-child(8)', { display: 'block', duration: 0 })
            .to('.current-lyric:nth-child(8)', {
                display: 'block', duration: 4, ease: "power2.out", onStart: () => {
                }
            })
            .to('.current-lyric:nth-child(8)', { display: 'none', duration: 0 })
            .to('.next-lyric:nth-child(8)', { display: 'none', duration: 0 })
            .to('.next-lyric:nth-child(9)', { display: 'block', duration: 0 })
            .to('.current-lyric:nth-child(9)', {
                display: 'block', duration: 2, ease: "power2.out", onStart: () => {
                    gsap.to('.current-lyric:nth-child(9) .current-lyric-color', { backgroundPositionX: '-100%', duration: 3.6 })
                    gsap.to('.current-lyric:nth-child(10) .current-lyric-color', { backgroundPositionX: '-100%', duration: 2.6, delay: 1.8 })

                }
            })
            .to('.current-lyric:nth-child(9)', { display: 'none', duration: 0 })
            .to('.next-lyric:nth-child(9)', { display: 'none', duration: 0 })
            .to('.next-lyric:nth-child(10)', { display: 'block', duration: 0 })
            .to('.current-lyric:nth-child(10)', {
                display: 'block', duration: 1.8, ease: "power2.out", onStart: () => {
                    gsap.to('.current-lyric:nth-child(11) .current-lyric-color', { backgroundPositionX: '-100%', duration: 2.6, delay: 1.4})

                }
            })
            .to('.current-lyric:nth-child(10)', { display: 'none', duration: 0 })
            .to('.next-lyric:nth-child(10)', { display: 'none', duration: 0 })
            .to('.next-lyric:nth-child(11)', { display: 'block', duration: 0 })
            .to('.current-lyric:nth-child(11)', {
                display: 'block', duration: 1.6, ease: "power2.out", onStart: () => {
                    gsap.to('.current-lyric:nth-child(12) .current-lyric-color', { backgroundPositionX: '-100%', duration: 2.7, delay: 1.4 })

                }
            })
            .to('.current-lyric:nth-child(11)', { display: 'none', duration: 0 })
            .to('.next-lyric:nth-child(11)', { display: 'none', duration: 0 })
            .to('.next-lyric:nth-child(12)', { display: 'block', duration: 0 })
            .to('.current-lyric:nth-child(12)', {
                display: 'block', duration: 1.6, ease: "power2.out", onStart: () => {
                    gsap.to('.current-lyric:nth-child(13) .current-lyric-color', { backgroundPositionX: '-100%', duration:4, delay: 1.4})

                }
            })
            .to('.current-lyric:nth-child(12)', { display: 'none', duration: 0 })
            .to('.next-lyric:nth-child(12)', { display: 'none', duration: 0 })
            .to('.next-lyric:nth-child(13)', { display: 'block', duration: 0 })
            .to('.current-lyric:nth-child(13)', {
                display: 'block', duration: 2, ease: "power2.out", onStart: () => {
                    gsap.to('.current-lyric:nth-child(14) .current-lyric-color', { backgroundPositionX: '-100%', duration: 2.8 , delay: 1.6})

                }
            })
            .to('.current-lyric:nth-child(13)', { display: 'none', duration: 0 })
            .to('.next-lyric:nth-child(13)', { display: 'none', duration: 0 })
            .to('.next-lyric:nth-child(14)', { display: 'block', duration: 0 })
            .to('.current-lyric:nth-child(14)', {
                display: 'block', duration: 2, ease: "power2.out", onStart: () => {
                    gsap.to('.current-lyric:nth-child(15) .current-lyric-color', { backgroundPositionX: '-100%', duration: 4, delay: 1.8 })

                }
            })
            .to('.current-lyric:nth-child(14)', { display: 'none', duration: 0 })
            .to('.next-lyric:nth-child(14)', { display: 'none', duration: 0 })
            .to('.next-lyric:nth-child(15)', { display: 'block', duration: 0 })
            .to('.current-lyric:nth-child(15)', {
                display: 'block', duration: 2.8, ease: "power2.out", onStart: () => {
                    gsap.to('.current-lyric:nth-child(16) .current-lyric-color', { backgroundPositionX: '-100%', duration: 3.5, delay: 2.6 })

                }
            })
            .to('.current-lyric:nth-child(15)', { display: 'none', duration: 0 })
            .to('.next-lyric:nth-child(15)', { display: 'none', duration: 0 })
            .to('.next-lyric:nth-child(16)', { display: 'block', duration: 0 })
            .to('.current-lyric:nth-child(16)', {
                display: 'block', duration: 2, ease: "power2.out", onStart: () => {
                    gsap.to('.current-lyric:nth-child(17) .current-lyric-color', { backgroundPositionX: '-100%', duration: 3.4, delay: 1.8 })

                }
            })
            .to('.current-lyric:nth-child(16)', { display: 'none', duration: 0 })
            .to('.next-lyric:nth-child(16)', { display: 'none', duration: 0 })
            .to('.next-lyric:nth-child(17)', { display: 'block', duration: 0 })
            .to('.current-lyric:nth-child(17)', {
                display: 'block', duration: 1.8, ease: "power2.out", onStart: () => {
                    gsap.to('.current-lyric:nth-child(18) .current-lyric-color', { backgroundPositionX: '-100%', duration: 3, delay: 1.6 })

                }
            })
            .to('.current-lyric:nth-child(17)', { display: 'none', duration: 0 })
            .to('.next-lyric:nth-child(17)', { display: 'none', duration: 0 })
            .to('.next-lyric:nth-child(18)', { display: 'block', duration: 0 })
            .to('.current-lyric:nth-child(18)', {
                display: 'block', duration: 1.8, ease: "power2.out", onStart: () => {
                    gsap.to('.current-lyric:nth-child(19) .current-lyric-color', { backgroundPositionX: '-100%', duration: 3.2, delay: 1.4 })

                }
            })
            .to('.current-lyric:nth-child(18)', { display: 'none', duration: 0 })
            .to('.next-lyric:nth-child(18)', { display: 'none', duration: 0 })
            .to('.next-lyric:nth-child(19)', { display: 'block', duration: 0 })
            .to('.current-lyric:nth-child(19)', {
                display: 'block', duration: 1.6, ease: "power2.out", onStart: () => {
                    gsap.to('.current-lyric:nth-child(20) .current-lyric-color', { backgroundPositionX: '-100%', duration: 4 , delay: 1})

                }
            })
            .to('.current-lyric:nth-child(19)', { display: 'none', duration: 0 })
            .to('.next-lyric:nth-child(19)', { display: 'none', duration: 0 })
            .to('.next-lyric:nth-child(20)', { display: 'block', duration: 0 })
            .to('.current-lyric:nth-child(20)', {
                display: 'block', duration: 2, ease: "power2.out", onStart: () => {
                    gsap.to('.current-lyric:nth-child(21) .current-lyric-color', { backgroundPositionX: '-100%', duration: 6 , delay: 1.6})

                }
            })
            .to('.current-lyric:nth-child(20)', { display: 'none', duration: 0 })
            .to('.next-lyric:nth-child(20)', { display: 'none', duration: 0 })
            .to('.next-lyric:nth-child(21)', { display: 'block', duration: 0 })
            .to('.current-lyric:nth-child(21)', {
                display: 'block', duration: 2, ease: "power2.out", onStart: () => {

                }
            })
    }
}

document.getElementById('app').innerHTML = `<div class="absolute top-0 left-0 w-full h-full" style="color: ${song.text_primary};">
      <img class="h-full w-full object-cover blur-lg" src="${song.background_image}" alt="">
    </div>
    <div class="absolute top-0 left-0 w-full h-full" style="background-color: ${song.background}; opacity: ${song.background_opacity};"></div>
    <div class="relative">
      <div class="pb-6" style="color: ${song.text_secondary};">
        <h1 class="text-center pb-1 font-bold pt-4 text-3xl">BÀI HÁT</h1>
        <p class="font-medium text-center text-lg" style="color: ${song.text_primary};">${song.song_name}</p>
      </div>
      <div class="w-[96%] mx-auto">
        <div class="relative z-1 aspect-square mb-8">
          <div id="disc" class="w-full h-full bg-white rounded-full overflow-hidden " style="box-shadow: 
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
    </div>`

function delay(seconds) {
    return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}

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
    const html = song.lyrics.map((lyric, index) => `
        <div  class="current-lyric ${index == 0 ? 'inline-block' : 'hidden'}  text-xs font-bold red-sweep h-[20px] absolute top-0 left-0 w-full h-full">
            <div class="hidden absolute bottom-[110%] left-[80%]">${index+1}</div>      
        <div style="font-weight: 900;
      color: ${song.accent_primary};
      background: linear-gradient(to right, ${song.text_primary} 50%, ${song.accent_primary} 50%);
      background-size: 200% 100%;
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
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

renderNextLyrics();
renderLyrics();




//////////////////////
// tl.to('.current-lyric:nth-child(1)', { backgroundPositionX: '-43%', duration: 1 })
// .to('.current-lyric:nth-child(1)', { backgroundPositionX: '-67%', duration: 0.6 })
// .to('.current-lyric:nth-child(1)', { backgroundPositionX: '-100%', duration: 0.8 })
//     .to('.current-lyric:nth-child(1)', { display: 'none', duration: 0 })
//     .to('.next-lyric:nth-child(1)', { display: 'none', duration: 0 })
//     .to('.next-lyric:nth-child(2)', { display: 'block', duration: 0 })
//     .to('.current-lyric:nth-child(2)', { display: 'block', backgroundPositionX: '-50%', duration: 0.75, ease: "power2.out" })
//     .to('.current-lyric:nth-child(2)', { display: 'block', backgroundPositionX: '-100%', duration: 0.75, ease: "power2.out" })
//     .to('.current-lyric:nth-child(2)', { display: 'none', duration: 0 })
//     .to('.next-lyric:nth-child(2)', { display: 'none', duration: 0 })
//     .to('.next-lyric:nth-child(3)', { display: 'block', duration: 0 })
//     .to('.current-lyric:nth-child(3)', { display: 'block', backgroundPositionX: '-50%', duration: 0.75, ease: "power2.out" })
//     .to('.current-lyric:nth-child(3)', { display: 'block', backgroundPositionX: '-100%', duration: 0.75, ease: "power2.out" })
//     .to('.current-lyric:nth-child(3)', { display: 'none', duration: 0 })
//     .to('.next-lyric:nth-child(3)', { display: 'none', duration: 0 })
//     .to('.next-lyric:nth-child(4)', { display: 'block', duration: 0 })
//     .to('.current-lyric:nth-child(4)', { display: 'block', backgroundPositionX: '-50%', duration: 0.6, ease: "power2.out" })
//     .to('.current-lyric:nth-child(4)', { display: 'block', backgroundPositionX: '-100%', duration: 0.8, ease: "power2.out" })
//     .to('.current-lyric:nth-child(4)', { display: 'none', duration: 0 })
//     .to('.next-lyric:nth-child(4)', { display: 'none', duration: 0 })
//     .to('.next-lyric:nth-child(5)', { display: 'block', duration: 0 })
//     .to('.current-lyric:nth-child(5)', { display: 'block', backgroundPositionX: '-50%', duration: 0.9, ease: "power2.out" })
//     .to('.current-lyric:nth-child(5)', { display: 'block', backgroundPositionX: '-100%', duration: 0.9, ease: "power2.out" })
//     .to('.current-lyric:nth-child(5)', { display: 'none', duration: 0 })
//     .to('.next-lyric:nth-child(5)', { display: 'none', duration: 0 })
//     .to('.next-lyric:nth-child(6)', { display: 'block', duration: 0 })
//     .to('.current-lyric:nth-child(6)', { display: 'block', backgroundPositionX: '-50%', duration: 0.9, ease: "power2.out" })
//     .to('.current-lyric:nth-child(6)', { display: 'block', backgroundPositionX: '-100%', duration: 0.9, ease: "power2.out" })
//     .to('.current-lyric:nth-child(6)', { display: 'none', duration: 0 })
//     .to('.next-lyric:nth-child(6)', { display: 'none', duration: 0 })
//     .to('.next-lyric:nth-child(7)', { display: 'block', duration: 0 })
//     .to('.current-lyric:nth-child(7)', { display: 'block', backgroundPositionX: '-50%', duration: 0.9, ease: "power2.out" })
//     .to('.current-lyric:nth-child(7)', { display: 'block', backgroundPositionX: '-100%', duration: 0.9, ease: "power2.out" })
//     .to('.current-lyric:nth-child(7)', { display: 'none', duration: 0 })
//     .to('.next-lyric:nth-child(7)', { display: 'none', duration: 0 })
//     .to('.next-lyric:nth-child(8)', { display: 'block', duration: 0 })
//     .to('.current-lyric:nth-child(8)', { display: 'block', backgroundPositionX: '-50%', duration: 0.8, ease: "power2.out" })
//     .to('.current-lyric:nth-child(8)', { display: 'block', backgroundPositionX: '-100%', duration: 6, ease: "power2.out" })