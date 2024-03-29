// --- GSAP 1 ---

// animation 1: the red box BOUNCES on the way to its target destination.
// 100% refers to its height
// gsap.from("header", {duration: 1, y: "-100%", ease: "bounce", })

// animation 2: the content of the red box APPEARS, one at a time.
// gsap.from("li", {duration: 1, opacity: 0, delay: 1, stagger: .5})

// animation 3: Sidebar slides from out-of-screen to their target position.
// gsap.from("sidebar-left", {duration: 1, x: "-100%", delay: 1.5 })
// gsap.from("sidebar-right", {duration: 1, x: "-100vw", delay: 1, ease: "power2.in" })

// We can use `.to`. (`.from` modifies BEFORE state, `.to` modifies TARGET state)
// when using `.from`, the TARGET state is the position of an element without GSAP
// animation 4: Footer moves to target position "elasticly"
// gsap.to("footer", {duration: 1, y: 0, ease: "elastic", delay: 2.5})

// We can use `fromTo` to modify values of the BEFORE and TARGET state
// Animation 5: Button animation start at opacity 0, scale (size) 0, rotated twice. This goes to opacity 1, scale 2, rotation 0, with a delay of 3.5 seconds, all in a duration of 1 sec (for the `to` transition)
// gsap.fromTo("button", {opacity: 0, scale: 0, rotation: 720}, {duration: 1, delay: 3.5, opacity: 1, scale: 2, rotation: 0})


// We can have timelines, so we don't have to make a lot of changes if we modify the delay of 1 animation.
// What it does it chains animations after another. Meaning, an animation only occurs as soon as the last animation finishes. Adding `delay` is unnecessary at this point.
const timeline = gsap.timeline({defaults: {duration: 1,  } })

timeline
    .from("header", {y: "-100%", ease: "bounce", display: "none"})
    .from("li", {opacity: 0, delay: 1, stagger: .5})

    // `.from` takes a second arg, which can be either `absolute` or `relative` delay. 
    // `Absolute` delay is as soon as the timeline starts. 
    // `Relative` delay is as soon as the last animation finishes. 
    // We've picked `absolute` delay (`1`), so the delay is of this animation is not after the last animation finishes, but rather 1 second after the timeline begins. 
    .from("sidebar-right", {x: "-100vw", ease: "power2.in", display: "none"}, 1)

    // This uses `relative` delay. Left caret refers to when last animation starts, and the value is the delay when the animation starts. So only using a single left caret means to start as soon as the last animation starts.
    .from("sidebar-left", {x: "-100%", display: "none"}, "<.5")

    .from(".footer-one", {y: "-100%", ease: "elastic", display: "none"}, )
    .fromTo("button", {opacity: 0, scale: 0, rotation: 720}, {opacity: 1, scale: 2, rotation: 0,})



// reverse animation

const button = document.querySelector("button")

button.addEventListener("click", () => { 
    timeline.timeScale(2)
    timeline.reverse()
    })

// --- END OF GSAP 1 ---

// --- GSAP 2 ---

// `toggleActions` positional args: (1 - when it enters the viewport due to scrolling down) (2 - when it exits the viewport due to scrolling down) (3 - when it enters the viewport due to scrolling up) (4 - when it exits the viewport???)
gsap.to(".c", {scrollTrigger: {
    trigger: ".c", 
    toggleActions: "restart pause reverse pause",
    
}, 

x:400, rotation: 360, duration:3

}
)