// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Hero Section Animation
gsap.from(".hero-title", {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: "power4.out",
});

gsap.from(".hero-subtitle", {
    y: 50,
    opacity: 0,
    delay: 0.3,
    duration: 1,
    ease: "power4.out",
});

// About Section Animation
gsap.from("#about h2", {
    scrollTrigger: {
        trigger: "#about",
        start: "top 80%",
    },
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
});

gsap.from("#about p", {
    scrollTrigger: {
        trigger: "#about",
        start: "top 70%",
    },
    y: 100,
    opacity: 0,
    duration: 1,
    delay: 0.2,
    ease: "power2.out",
});

// Projects Animation
gsap.from(".project-card", {
    scrollTrigger: {
        trigger: "#projects",
        start: "top 80%",
        end: "bottom 60%",
        scrub: 1,
    },
    y: 100,
    opacity: 0,
    stagger: 0.3,
    ease: "power3.out",
});

// Contact Form Animation
gsap.from("#contact h2", {
    scrollTrigger: {
        trigger: "#contact",
        start: "top 80%",
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
});
