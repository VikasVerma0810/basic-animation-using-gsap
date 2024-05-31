var timeLine = gsap.timeline();

timeLine.from("#nav h3", {
    y: -50,
    duration: 1,
    opacity: 0,
    stagger: 0.2
});

timeLine.from("#main h1", {
    x: -500,
    duration: 1,
    opacity: 0,
    stagger: 0.5
});

timeLine.from("img",{
    x:200,
    rotate:45,
    opacity:0,
    duration:0.5,
    stagger:0.5
})
