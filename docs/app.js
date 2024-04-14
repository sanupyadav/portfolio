var tl = gsap.timeline();

gsap.from(".main ",{
    scale:0,
    duration:1,
    stagger:0.5
})


gsap.from(".aside ", {
    x:-50,
    duration:1,
    delay:0.5,
    opacity:0,
    stagger:0.2
})

gsap.from(".nav ", {
    x:40,
    duration:1,
    delay:0.5,
    opacity:0,
    stagger:0.2
})

gsap.from(".main h1",{
    x:30,
    duration:2,
    opacity:0,
    // stagger:0.3
})

gsap.from(".main h5",{
    duration:2,
    scale:0,
    opacity:0

})
