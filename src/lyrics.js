
export const playLyricDaQuenRoi = (tl) => {
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


export const playLyricDiaNgucTranGian = (tl) => {
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


export const playLyricDiaNgucTranGian2 = (tl) => {
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
                gsap.to('.current-lyric:nth-child(11) .current-lyric-color', { backgroundPositionX: '-100%', duration: 2.6, delay: 1.4 })

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
                gsap.to('.current-lyric:nth-child(13) .current-lyric-color', { backgroundPositionX: '-100%', duration: 4, delay: 1.4 })

            }
        })
        .to('.current-lyric:nth-child(12)', { display: 'none', duration: 0 })
        .to('.next-lyric:nth-child(12)', { display: 'none', duration: 0 })
        .to('.next-lyric:nth-child(13)', { display: 'block', duration: 0 })
        .to('.current-lyric:nth-child(13)', {
            display: 'block', duration: 2, ease: "power2.out", onStart: () => {
                gsap.to('.current-lyric:nth-child(14) .current-lyric-color', { backgroundPositionX: '-100%', duration: 2.8, delay: 1.6 })

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
                gsap.to('.current-lyric:nth-child(20) .current-lyric-color', { backgroundPositionX: '-100%', duration: 4, delay: 1 })

            }
        })
        .to('.current-lyric:nth-child(19)', { display: 'none', duration: 0 })
        .to('.next-lyric:nth-child(19)', { display: 'none', duration: 0 })
        .to('.next-lyric:nth-child(20)', { display: 'block', duration: 0 })
        .to('.current-lyric:nth-child(20)', {
            display: 'block', duration: 2, ease: "power2.out", onStart: () => {
                gsap.to('.current-lyric:nth-child(21) .current-lyric-color', { backgroundPositionX: '-100%', duration: 6, delay: 1.6 })

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


export const playLyrics1800 = (tl) => {
    // Still on that—
    tl.to('.current-lyric:nth-child(1)', {
        display: 'none',
        delay: 7
    })
        .to('.next-lyric:nth-child(1)', { display: 'none', duration: 0 })
        .to('.next-lyric:nth-child(2)', { display: 'block', duration: 0 })
        //(One, eight, zero, zero, he's so handsome, he's my hero)
        .to('.current-lyric:nth-child(2)', {
            display: "block",
            duration: 3
        })
        .to('.current-lyric:nth-child(2)', {
            display: "none",
        })
        .to('.next-lyric:nth-child(2)', { display: 'none', duration: 0 })
        .to('.next-lyric:nth-child(3)', { display: 'block', duration: 0 })
        // (One, eight, zero, zero)
        .to('.current-lyric:nth-child(3)', {
            display: "block",
            duration: 2.6
        })
        .to('.current-lyric:nth-child(3)', {
            display: "none",
        })
        .to('.next-lyric:nth-child(3)', { display: 'none', duration: 0 })
        .to('.next-lyric:nth-child(4)', { display: 'block', duration: 0 })
        // Still on that 1-800, hit me up for a good time
        .to('.current-lyric:nth-child(4)', {
            display: "block",
            duration: 3.4
        })
        .to('.current-lyric:nth-child(4)', {
            display: "none",
        })
        .to('.next-lyric:nth-child(4)', { display: 'none', duration: 0 })
        .to('.next-lyric:nth-child(5)', { display: 'block', duration: 0 })
        // My shit bumps 'til it push me outta line
        .to('.current-lyric:nth-child(5)', {
            display: "block",
            duration: 3.4
        })
        .to('.current-lyric:nth-child(5)', {
            display: "none",
        })
        .to('.next-lyric:nth-child(5)', { display: 'none', duration: 0 })
        .to('.next-lyric:nth-child(6)', { display: 'block', duration: 0 })
        // You can't spell my name without the dollar sign
        .to('.current-lyric:nth-child(6)', {
            display: "block",
            duration: 3
        })
        .to('.current-lyric:nth-child(6)', {
            display: "none",
        })
        .to('.next-lyric:nth-child(6)', { display: 'none', duration: 0 })
        .to('.next-lyric:nth-child(7)', { display: 'block', duration: 0 })
        // Rainbow money, take whatever, yes, I'm colorblind
        .to('.current-lyric:nth-child(7)', {
            display: "block",
            duration: 3.4
        })
        .to('.current-lyric:nth-child(7)', {
            display: "none",
        })
        .to('.next-lyric:nth-child(7)', { display: 'none', duration: 0 })
        .to('.next-lyric:nth-child(8)', { display: 'block', duration: 0 })
        // (One, eight, zero, zero, he's so handsome, he's my hero)
        .to('.current-lyric:nth-child(8)', {
            display: "block",
            duration: 3
        })
        .to('.current-lyric:nth-child(8)', {
            display: "none",
        })
        .to('.next-lyric:nth-child(8)', { display: 'none', duration: 0 })
        .to('.next-lyric:nth-child(9)', { display: 'block', duration: 0 })
        // (One, eight, zero, zero) It's that 1-800, hit my line
        .to('.current-lyric:nth-child(9)', {
            display: "block",
            duration: 3
        })
        .to('.current-lyric:nth-child(9)', {
            display: "none",
        })
        .to('.next-lyric:nth-child(9)', { display: 'none', duration: 0 })
        .to('.next-lyric:nth-child(10)', { display: 'block', duration: 0 })
        // (One, eight, zero, zero, he's so handsome, he's my hero)
        .to('.current-lyric:nth-child(10)', {
            display: "block",
            duration: 3
        })
        .to('.current-lyric:nth-child(10)', {
            display: "none",
        })
        .to('.next-lyric:nth-child(10)', { display: 'none', duration: 0 })
        .to('.next-lyric:nth-child(11)', { display: 'block', duration: 0 })
        // "(One, eight, zero, zero) Let me 1-800, blow your mind"
        .to('.current-lyric:nth-child(11)', {
            display: "block",
            duration: 3.4
        })
        .to('.current-lyric:nth-child(11)', {
            display: "none",
        })
        .to('.next-lyric:nth-child(11)', { display: 'none', duration: 0 })
        .to('.next-lyric:nth-child(12)', { display: 'block', duration: 0 })
        // Eight wheels in the front, get some big toys
        .to('.current-lyric:nth-child(12)', {
            display: "block",
            duration: 1.2
        })
        .to('.current-lyric:nth-child(12)', {
            display: "none",
        })
        .to('.next-lyric:nth-child(12)', { display: 'none', duration: 0 })
        .to('.next-lyric:nth-child(13)', { display: 'block', duration: 0 })
        // 2025, it's the year of the it boy
        .to('.current-lyric:nth-child(13)', {
            display: "block",
            duration: 1.6
        })
        .to('.current-lyric:nth-child(13)', {
            display: "none",
        })
        .to('.next-lyric:nth-child(13)', { display: 'none', duration: 0 })
        .to('.next-lyric:nth-child(14)', { display: 'block', duration: 0 })
        // Got a little money, yeah, got a little Bitcoin
        .to('.current-lyric:nth-child(14)', {
            display: "block",
            duration: 1.4
        })
        .to('.current-lyric:nth-child(14)', {
            display: "none",
        })
        .to('.next-lyric:nth-child(14)', { display: 'none', duration: 0 })
        .to('.next-lyric:nth-child(15)', { display: 'block', duration: 0 })
        // She, she, she, she makin' me real coy
        .to('.current-lyric:nth-child(15)', {
            display: "block",
            duration: 1.2
        })
        .to('.current-lyric:nth-child(15)', {
            display: "none",
        })
        .to('.next-lyric:nth-child(15)', { display: 'none', duration: 0 })
        .to('.next-lyric:nth-child(16)', { display: 'block', duration: 0 })
        // Never step too low, I don't sip Dunkin'
        .to('.current-lyric:nth-child(16)', {
            display: "block",
            duration: 1.2
        })
        .to('.current-lyric:nth-child(16)', {
            display: "none",
        })
        .to('.next-lyric:nth-child(16)', { display: 'none', duration: 0 })
        .to('.next-lyric:nth-child(17)', { display: 'block', duration: 0 })
        //"Quite nice stop, I ain't talkin' no muffin"
        .to('.current-lyric:nth-child(17)', {
            display: "block",
            duration: 1.2
        })
        .to('.current-lyric:nth-child(17)', {
            display: "none",
        })
        .to('.next-lyric:nth-child(17)', { display: 'none', duration: 0 })
        .to('.next-lyric:nth-child(18)', { display: 'block', duration: 0 })
        // On a first date, stay trauma dumpin'
        .to('.current-lyric:nth-child(18)', {
            display: "block",
            duration: 1.2
        })
        .to('.current-lyric:nth-child(18)', {
            display: "none",
        })
        .to('.next-lyric:nth-child(18)', { display: 'none', duration: 0 })
        .to('.next-lyric:nth-child(19)', { display: 'block', duration: 0 })
        // Blah, blah, blah, like somethin', somethin'
        .to('.current-lyric:nth-child(19)', {
            display: "block",
            duration: 1.4
        })
        .to('.current-lyric:nth-child(19)', {
            display: "none",
        })
        .to('.next-lyric:nth-child(19)', { display: 'none', duration: 0 })
        .to('.next-lyric:nth-child(20)', { display: 'block', duration: 0 })
        // "One pump, two pump, three pump"
        .to('.current-lyric:nth-child(20)', {
            display: "block",
            duration: 1.4
        })
        .to('.current-lyric:nth-child(20)', {
            display: "none",
        })
        .to('.next-lyric:nth-child(20)', { display: 'none', duration: 0 })
        .to('.next-lyric:nth-child(21)', { display: 'block', duration: 0 })
        // "The way she workin' that shit, she left me comatose (Uh)"
        .to('.current-lyric:nth-child(21)', {
            display: "block",
            duration: 2.4
        })
        .to('.current-lyric:nth-child(21)', {
            display: "none",
        })
        .to('.next-lyric:nth-child(21)', { display: 'none', duration: 0 })
        .to('.next-lyric:nth-child(22)', { display: 'block', duration: 0 })
        // Three plus six is nine, this baby ain't talkin' 'bout tic-tac-toe
        .to('.current-lyric:nth-child(22)', {
            display: "block",
            duration: 2.4
        })
        .to('.current-lyric:nth-child(22)', {
            display: "none",
        })
        .to('.next-lyric:nth-child(22)', { display: 'none', duration: 0 })
        .to('.next-lyric:nth-child(23)', { display: 'block', duration: 0 })
        // Uh, she a little freak, I guess I'm an animal
        .to('.current-lyric:nth-child(23)', {
            display: "block",
            duration: 2
        })
        .to('.current-lyric:nth-child(23)', {
            display: "none",
        })
        .to('.next-lyric:nth-child(23)', { display: 'none', duration: 0 })
        .to('.next-lyric:nth-child(24)', { display: 'block', duration: 0 })
        // "Yee-ah, yee-ah, oh"
        .to('.current-lyric:nth-child(24)', {
            display: "block",
            duration: 0.6
        })
        .to('.current-lyric:nth-child(24)', {
            display: "none",
        })
        .to('.next-lyric:nth-child(24)', { display: 'none', duration: 0 })
        .to('.next-lyric:nth-child(25)', { display: 'block', duration: 0 })
        // "Two steppin' like I'm that Joe (Uh, bbno$)"
        .to('.current-lyric:nth-child(25)', {
            display: "block",
            duration: 2
        })


}

export const playAnimationEverNight = (tl) => {
    tl.to('#ever-night', {
        y: 0,
        x: 0,
        duration: 6
    }, '<')
        .to("#disc-ever-night", {
            y: 0,
            duration: 6,
            delay: 1
        }, "<")
}
