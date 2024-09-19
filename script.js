
Shery.mouseFollower({
  //Parameters are optional.
  skew: true,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});
// Function to handle the loading animation
function handleLoading() {
  const loadingElement = document.querySelector('.loading');
  
  // Wait for all content to load
  window.addEventListener('load', () => {
    // Animate the loading element's height to 0
    gsap.to(loadingElement, {
      height: 0,
      duration: 1, // Adjust duration as needed
      ease: "power2.inOut",
      onComplete: () => {
        // Optional: Remove the loading element from the DOM after animation
        loadingElement.style.display = 'none';
      }
    });
  });
}

// Call the function to initialize the loading animation
handleLoading();



// locomotive js 
// const scroll = new LocomotiveScroll({
//   el: document.querySelector('.main'),
//   smooth: true
// });

function loader(){
document.addEventListener("DOMContentLoaded",function(){
  var scrollContent =document.querySelector(".infinite-content")
  
  scrollContent.innerHTML+=scrollContent.innerHTML;
 
})
}
loader()

const  text1 =document.querySelector(".loading-item-1>h1");
const  text2 =document.querySelector(".loading-item-3>h2");
gsap.to(text1,{
  y:-100,
  duration:1,
  ease:Power1.easeIn,
  
});
gsap.to(text2,{
  y:-100,
  duration:1,
  ease:Power3
});






const lenis = new Lenis({
  // infinite:true,
})

// capittal lenis is liye aya hai kyu ki jo cdn hamne html me lagaya hai vo  hi ki jaga yaha  Lenis()aya hia
// const lenis me ab lenis ka pura power a gaya hai jo jo lenis kar sakta hia vo sab 

lenis.on('scroll', (e) => {
  console.log(e)
})
function raf(time) {
lenis.raf(time)
//  uper ka matlb ahi ki ye linis ke system ko bhi send kar rha hia 
// lenis.raf(time) me ab lenis ka raf() function ko call kar rha hai
requestAnimationFrame(raf)
//   uper wale line ka mtlb hia ki function bahut chote interval ke liye chalega mtlb second ka bhi kai hisa kar do do use bhi chote me chale pir ruke phir chale 
// requestAnimationFrame is a built-in JavaScript function that tells the browser that you wish to perform an animation and requests that the browser call a specified function to update an animation before the next repaint.
}

requestAnimationFrame(raf)






var menu = document.querySelector(".menu");
var fly = document.querySelector(".fly");
// This code adds a click event listener to the menu element
menu.addEventListener("click", function () {
  // When clicked, it toggles the "openmenu" class on the menu element
  // This likely triggers a visual change in the menu's appearance
  // The toggle() method adds a class if it's not present, and removes it if it is present
  // In this case, it will add "openmenu" class if it's not on the menu element, or remove it if it is
  menu.classList.toggle("openmenu")
})

menu.addEventListener("click", function () {
  if (fly.style.display === "none" || fly.style.display === "") {
    gsap.set(fly, { display: "flex", height: "0%" });
    gsap.to(fly, {
      height: "100%",
      duration: 0.5
    });
  } else {
    gsap.to(fly, {
      height: "0%",
      duration: 0.5,
      onComplete: () => {
        fly.style.display = "none";
      }
    });
  }
});

// menu me circle ki movement ko karne keliey 
var cirlce = document.querySelector(".circle")
var frame = document.querySelectorAll(".frame")
const lerp = (x, y, a) => x * (1 - a) + y * a;
function movement() {
  frame.forEach(frame => {
    frame.addEventListener("mousemove", function (dets) {
      gsap.to(cirlce, {
        scale: 3
      })
      gsap.to(frame.children, {
        color: "red",
        duration: .3,
        y: "-5vw"

      })
      var dims = frame.getBoundingClientRect();
      var xstart = dims.x;
      var xend = dims.x + dims.width;
      var zeroone = gsap.utils.mapRange(xstart, xend, 0, 1, dets.clientX)
      gsap.to(frame.children, {
        x: lerp(-50, 50, zeroone),
        duration: .3
      })


    })




    frame.addEventListener("mouseleave", function () {
      gsap.to(cirlce, {
        scale: 1,

      })
      gsap.to(frame.children, {
        color: "#fff",
        y: 0,
        duration: .3,
        x: 0

      })
    })

  });

}
movement();





gsap.from(".nav", {
  y: "-20px",
  duration: 2,
  opacity: 0,
  stagger: .1,
  ease: Power3

})

Shery.textAnimate(".free1" /* Element to target.*/, {
  //Parameters are optional.
  style: 1,
  y: 10,
  delay: 0.1,
  duration: 2,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});
Shery.textAnimate(".free1,free2,free3" /* Element to target.*/, {
  //Parameters are optional.
  style: 1,
  y: 10,
  delay: 0.1,
  duration: 2,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});



Shery.imageEffect(" .gif-image,", {
  style: 3,
  debug: false,
  config:
    /* Config made from debug panel */
    { "uFrequencyX": { "value": 30.53, "range": [0, 100] }, "uFrequencyY": { "value": 12, "range": [0, 100] }, "uFrequencyZ": { "value": 10, "range": [0, 100] }, "geoVertex": { "range": [1, 64], "value": 22.16 }, "zindex": { "value": "996999", "range": [-9999999, 9999999] }, "aspect": { "value": 1.2107835350858929 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": false }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1.12, "range": [1, 5] }, "scrollType": { "value": 0 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 0 }, "noise_speed": { "value": 0.2, "range": [0, 10] }, "metaball": { "value": 0.2, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0.002, "range": [0, 0.1] }, "noise_height": { "value": 0.5, "range": [0, 2] }, "noise_scale": { "value": 10, "range": [0, 100] } }

});
Shery.imageEffect(".gif-image", {
  style: 3,
  /*optional parameters
  these parameter dose not applies to custom scroll trigger callback */
  scrollSnapping: true,
  scrollSpeed: 6,
  touchSpeed: 6,
  damping: 7,
});
Shery.makeMagnet(".free1,free2,free3" /* Element to target.*/, {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});
Shery.makeMagnet(".text1,text2,text3" /* Element to target.*/, {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

var one = document.querySelector(".one");
gsap.from(".one", {
  y: "60px",
  duration: 2,
  opacity: 0,
  stagger: .1,
  ease: Power3

})
var one = document.querySelector(".two");
gsap.from(".two", {
  y: "40px",
  duration: 2,
  opacity: 0,
  stagger: .1,
  ease: Power3,
  

})


// Make sure GSAP and ScrollTrigger are properly loaded
gsap.registerPlugin(ScrollTrigger);

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".box5",
      start: "50% 50%",
      end: "100% 50%",
      scrub: 1,
      pin: true,
      markers: true,
    }
  });

  tl.to(".box5 .top", {
    top: "-50%",
  }, 0);
  tl.to(".box5 .bottom", {
    bottom: "-50%",
  }, 0);
});




