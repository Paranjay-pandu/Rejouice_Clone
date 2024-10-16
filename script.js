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

const lenisScroll = () => {
  const lenis = new Lenis({
    duration: 1.2,
    direction: "vertical",
    gestureDirection: "vertical",
    smooth: true,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  lenis.on("scroll", ({ scroll, velocity, direction, progress }) => {
    console.log({ scroll, velocity, direction, progress });
  });
};

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

const page1 = document.querySelector("#page1");
const cursor1 = document.querySelector("#page1 #cursor");

const page6 = document.querySelector("#page6");
const cursor6 = document.querySelector("#page6 #cursorBall");
page6.addEventListener("click", () => console.log(cursor6));
document.addEventListener("DOMContentLoaded", () => {
  loadingAnim();
  cursorEffect(page1, cursor1);
  cursorEffect(page6, cursor6);
  pageAnimation();
  footerAnim();
  // lenisScroll();
  // locoscroll();
});

const cursorEffect = (page, cursorElem) => {
  page.addEventListener("mousemove", (dets) => {
    gsap.to(cursorElem, {
      left: dets.x,
      top: dets.y,
      ease: "power3.inout",
    });
  });

  page.addEventListener("mouseenter", () => {
    gsap.to(cursorElem, {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
    });
  });
  page.addEventListener("mouseleave", () => {
    gsap.to(cursorElem, {
      opacity: 0,
      scale: 0,
      filter: "blur(20px)",
    });
  });
};

const pageAnimation = () => {
  const spans = document.querySelectorAll("#page2Content #textcontainer span");
  const anchors = document.querySelectorAll("#large #pageAnimation");
  const spans2 = document.querySelectorAll(".page2Content #textcontainer span");
  function divide(elem) {
    elem.forEach((span) => {
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
  }
  divide(spans);
  divide(anchors);
  divide(spans2);
  let anim3 = gsap.from("#page2Content nav h1", {
    stagger: 0.1,
    opacity: 0,
    y: 100,
    scrollTrigger: {
      trigger: "#page2",
      scroller: "body",
      start: "top 90%",
      end: "top 90%",
      scrub: true,
      onLeave: () => {
        anim3.seek(0);
        anim3.play();
      },
    },
  });
  let anim2 = gsap.to("#page2Content #underline", {
    width: "100%",
    duration: 0.5,
    scrollTrigger: {
      trigger: "#page2Content",
      scroller: "body",
      start: "top 90%",
      end: "top 90%",
      scrub: true,
      onLeave: () => {
        anim2.seek(0);
        anim2.play();
      },
    },
  });
  let anim = gsap.from("#page2Content span#pageAnimation *", {
    stagger: 0.02,
    y: 100,
    duration: 1,
    scrollTrigger: {
      trigger: "#page2Content span#pageAnimation",
      scroller: "body",
      start: "top 95%",
      end: "top 95%",
      ease: "linear",
      scrub: true,
      onLeave: () => {
        anim.seek(0);
        anim.play();
      },
    },
  });
  let anim4 = gsap.from("a#pageAnimation *", {
    stagger: 0.03,
    y: 100,
    duration: 1,
    scrollTrigger: {
      trigger: "a#pageAnimation",
      scroller: "body",
      start: "top 95%",
      end: "top 95%",
      ease: "linear",
      scrub: true,
      onLeave: () => {
        anim4.seek(0);
        anim4.play();
      },
    },
  });
  let anim6 = gsap.from(".page2Content nav h1", {
    stagger: 0.1,
    opacity: 0,
    y: 100,
    scrollTrigger: {
      trigger: ".page2Content",
      scroller: "body",
      start: "top 90%",
      end: "top 90%",
      scrub: true,
      onLeave: () => {
        anim3.seek(0);
        anim3.play();
      },
    },
  });
  let anim7 = gsap.to(".page2Content #underline", {
    width: "100%",
    duration: 0.5,
    scrollTrigger: {
      trigger: ".page2Content",
      scroller: "body",
      start: "top 90%",
      end: "top 90%",
      scrub: true,
      onLeave: () => {
        anim7.seek(0);
        anim7.play();
      },
    },
  });
  let anim5 = gsap.from(".page2Content span#pageAnimation2 *", {
    stagger: 0.02,
    y: 100,
    duration: 1,
    scrollTrigger: {
      trigger: ".page2Content span#pageAnimation2",
      scroller: "body",
      start: "top 95%",
      end: "top 95%",
      ease: "linear",
      scrub: true,
      onLeave: () => {
        anim5.seek(0);
        anim5.play();
      },
    },
  });

  let anim10 = gsap.from(".page2Content1 nav h1", {
    stagger: 0.1,
    opacity: 0,
    y: 100,
    scrollTrigger: {
      trigger: ".page2Content1",
      scroller: "body",
      start: "top 90%",
      end: "top 90%",
      scrub: true,
      onLeave: () => {
        anim10.seek(0);
        anim10.play();
      },
    },
  });
  let anim9 = gsap.to(".page2Content1 #underline", {
    width: "100%",
    duration: 0.5,
    scrollTrigger: {
      trigger: ".page2Content1",
      scroller: "body",
      start: "top 90%",
      end: "top 90%",
      scrub: true,
      onLeave: () => {
        anim3.seek(0);
        anim3.play();
      },
    },
  });
  let anim8 = gsap.from(".page2Content1 span#pageAnimation2 *", {
    stagger: 0.02,
    y: 100,
    duration: 1,
    scrollTrigger: {
      trigger: ".page2Content1 span#pageAnimation2",
      scroller: "body",
      start: "top 95%",
      end: "top 95%",
      ease: "linear",
      scrub: true,
      onLeave: () => {
        anim8.seek(0);
        anim8.play();
      },
    },
  });
};

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4.1,
  spaceBetween: 30,
  loop: true,
});

const loadingScreen = document.querySelector("#loadingScreen");
const loadHeader = document.querySelector("#loadingScreen h1");
const mainHeader = document.querySelector("#page1 #page1-content h1")
const letters = mainHeader.textContent.split("");
mainHeader.innerHTML = "";
letters.forEach((letter) => {
  const spanLetter = document.createElement("span");
  spanLetter.id = "loadingLetter";
  spanLetter.innerHTML = letter;
  spanLetter.style.cssText = `
  display: inline-block;
    color: white;
    z-index: 101;
    font-family: rejHead;
  `;
  mainHeader.appendChild(spanLetter);
});

console.log(loadHeader.innerHTML);

const loadingAnim = () => {
  const ltl = gsap.timeline();
  ltl.from(loadHeader, {
    x: 100,
    opacity: 0,
    delay: 1,
  });
  ltl.to(loadHeader, {
    delay: 1,
    x: -100,
    opacity: 0,
  });
  ltl.to(loadingScreen, {
    opacity: 0,
    display: "none",
    duration: 1
  },"loading" );
  ltl.from("#page1 #page1-content h1 span", {
    y: 200,
    opacity: 0.4,
    stagger: 0.05
  }, "loading")
  ltl.from("#page1 nav h1", {
    x: 50,
    stagger: 0.1,
    opacity: 0.5
  }, "loading")
};

const footerAnim = ()=>{
  gsap.to("footer", {
    opacity: 1,
    scrollTrigger:{
      trigger: "footer",
      scrub: 2,
      start: "top 100%",
      end: "top top",
    }
  })
  gsap.from("footer #section1 *", {
    y: -50,
    opacity: 0,
    stagger: 0.02,
    scrollTrigger:{
      trigger: "footer #section1",
      start: "top 100%",
      end: "top 60%",
      scrub: 2
    }
  })
  gsap.from("footer #section2 *", {
    y: -50,
    opacity: 0,
    stagger: 0.02,
    scrollTrigger:{
      trigger: "footer #section2",
      start: "top 100%",
      end: "top 60%",
      scrub: 2
    }
  })
  gsap.from("footer #section3 *", {
    y: -50,
    opacity: 0,
    stagger: 0.02,
    scrollTrigger:{
      trigger: "footer #section3",
      start: "top 100%",
      end: "top 60%",
      scrub: 2
    }
  })  
}

const menuHeaders = document.querySelectorAll(".textHover");

menuHeaders.forEach(header => {
  header.setAttribute('data-text', header.textContent); 
});
const menuSection = document.querySelector("#menuSection")
const menuButton = document.querySelector("#menuButton")
const menuOption = true
menuButton.addEventListener("click", ()=>{
  menuSection.style.top = 0
})
document.querySelector("#menuClose").addEventListener("click", ()=>{
  menuSection.style.top = "-100%"
})