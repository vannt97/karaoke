
export const playLyrics1800 = () => {

}

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