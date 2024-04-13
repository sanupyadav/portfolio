var tl = gsap.timeline();

tl.from(".main ",{
    opacity:0,
    stagger:0.5
})


tl.from(".aside ", {
    x:-50,
    duration:1,
    delay:0.5,
    opacity:0,
    stagger:0.2
})

tl.from(".nav ", {
    x:40,
    duration:1,
    delay:0.5,
    opacity:0,
    stagger:0.2
})
tl.from(".main h1",{
    x:30,
    opacity:0,
    stagger:0.3
})



tl.from(".main>img",{
    opacity:0,
    stagger:0.2
})

tl.from("h5",{
    scale:0,
    opacity:0

})
// tl.from("h5",{
//     y:30,
//     // repeat:-1,
//     duration:0.6,
//     yoyo:true,

// })