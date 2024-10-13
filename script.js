const locoscroll = () => {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
};
// const lenis = new Lenis({
//   smooth: true,
// });

// function raf(time) {
//   lenis.raf(time);
//   requestAnimationFrame(raf);
// }
// requestAnimationFrame(raf);

// ScrollTrigger.scrollerProxy(document.body, {
//   scrollTop(value) {
//     return arguments.length
//       ? lenis.scrollTo(value)
//       : document.documentElement.scrollTop || document.body.scrollTop;
//   },
//   getBoundingClientRect() {
//     return {
//       top: 0,
//       left: 0,
//       width: window.innerWidth,
//       height: window.innerHeight,
//     };
//   },
// });

// lenis.on("scroll", ScrollTrigger.update);

document.addEventListener("DOMContentLoaded", () => {
  cursorEffect();
  page2Animation();
});

const cursorEffect = () => {
  const page1 = document.querySelector("#page1");
  const cursor = document.querySelector("#page1 #cursor");

  page1.addEventListener("mousemove", (dets) => {
    gsap.to(cursor, {
      x: dets.x,
      y: dets.y,
      ease: "power3.inout",
    });
  });

  page1.addEventListener("mouseenter", () => {
    gsap.to(cursor, {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
    });
  });
  page1.addEventListener("mouseleave", () => {
    gsap.to(cursor, {
      opacity: 0,
      scale: 0,
      filter: "blur(20px)",
    });
  });
};

const page2Animation = () => {
  const spans = document.querySelectorAll("#page2Content #textcontainer span");
  spans.forEach((span) => {
    const words = span.textContent.split(" ");
    span.innerHTML = "";
    words.forEach((word) => {
      const stag = document.createElement("span");
      stag.innerHTML = word + `&MediumSpace;`;
      stag.style.cssText = `
                overflow: hidden;
                display: inline-block;
            `;
      span.appendChild(stag);
    });
  });

  // ScrollTrigger for #page2Content nav
  let anim3 = gsap.from("#page2Content nav h1", {
    stagger: 0.1,
    opacity: 0,
    y: 100,
    scrollTrigger: {
      trigger: "#page2", // Optional: remove or set to false when not debugging
      start: "top 90%",
      end: "top 90%", // adjust as needed
      scrub: true,
      onLeave: () => {
        anim3.seek(0);
        anim3.play();
      }, // Optional: remove or set to false when not debugging
    },
  });

  // ScrollTrigger for #page2Content #underline
  let anim2 = gsap.to("#page2Content #underline", {
    width: "100%",
    duration: 0.5,
    scrollTrigger: {
      trigger: "#page2Content", // Optional: remove or set to false when not debugging
      start: "top 90%",
      end: "top 90%", // adjust as needed
      scrub: true,
      onLeave: () => {
        anim2.seek(0);
        anim2.play();
      }, // Optional: remove or set to false when not debugging
    },
  });

  // ScrollTrigger for #page2Content #textcontainer span span
  let anim = gsap.from("#page2Content #textcontainer span span", {
    stagger: 0.01,
    y: 100,
    duration: 1,
    scrollTrigger: {
      trigger: "#page2Content ",
      scroller: "body",
      start: "top 90%",
      end: "top 90%",
      ease: "linear",
      scrub: true,
      onLeave: () => {
        anim.seek(0);
        anim.play();
      },
    },
  });
};