// window.addEventListener("mousemove",function(dets){
//        cirlce.style.left= dets.x+("px")
//        cirlce.style.top= dets.y+("px")
//     gsap.to(cirlce,{
//         x:dets.clientX,
//         y:dets.clientY,
//         duration:.3,
//         ease:Expo,
//     })
// })
Shery.mouseFollower({
    //Parameters are optional.
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });


// locomotive js 
const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});




var menu =document.querySelector(".menu");
var fly =document.querySelector(".fly");
menu.addEventListener("click",function(){
    menu.classList.toggle("openmenu")
    
   
})

menu.addEventListener("click",function(){
    if(fly.style.display =="none"){
        gsap.to(fly,{
               height:"100%",
            display:"flex"
        })
    }
        else{
            gsap.to(fly,{
                height:"0%",
                display:"none"
            })
        }
        
    }
)
 
// menu me circle ki movement ko karne keliey 
var cirlce =document.querySelector(".circle")
var frame =document.querySelectorAll(".frame")
const lerp = (x, y, a) => x * (1 - a) + y * a;
function movement(){
    frame.forEach(frame => {
        frame.addEventListener("mousemove",function(dets){
            gsap.to(cirlce,{
                scale:3
            })
            gsap.to(frame.children,{
                color:"red",
                duration:.3,
                y:"-5vw"
        
            })
            var dims =frame.getBoundingClientRect();
            var xstart =dims.x;
            var xend = dims.x +dims.width;
         var zeroone =gsap.utils.mapRange(xstart,xend,0,1,dets.clientX)
             gsap.to(frame.children,{
                x:lerp(-50,50,zeroone),
                duration:.3
             })
            
            
        })
        
        
        
        
        frame.addEventListener("mouseleave",function(){
            gsap.to(cirlce,{
                scale:1,
                
            })
            gsap.to(frame.children,{
                color:"#fff",
                y:0,
                duration:.3,
                x:0
               
            })
        })
        
    });
    
}
movement();




// social link pe img ko hover karne ke liye 
// document.querySelector(".social1").forEach(frame2 => {
//     frame2.addEventListener("mousemove",function(dets){
//         console.log(dets.clientX);
//         gsap.to(cirlce,{
//             scale:6
//         })
//         gsap.to(frame.children,{
//             color:"yellow",
//             duration:.3,
//             y:"-5vw"
    
//         })
//         var dims =frame2.getBoundingClientRect();
//         var xstart =dims.x;
//         var xend = dims.x +dims.width;
//      var zeroone =gsap.utils.mapRange(xstart,xend,0,1,dets.clientX)
//          gsap.to(frame.children,{
//             x:lerp(-50,50,zeroone),
//             duration:.3
//          })
        
        
//     })
    
    
    
    
//     frame2.addEventListener("mouseleave",function(){
//         gsap.to(cirlce,{
//             scale:1,
            
//         })
//         gsap.to(frame2.children,{
//             color:"#111",
//             y:0,
//             duration:.3,
//             x:0
           
//         })
//     })
    
// });

gsap.from(".nav",{
    y:"-20px",
    duration:2,
    opacity:0,
    stagger:.1,
    ease:Power3

})

  Shery.textAnimate(".page1-child1>h1" /* Element to target.*/, {
    //Parameters are optional.
    style: 1,
    y: 10,
    delay: 0.1,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });
Shery.textAnimate(".page1-child2>h1" /* Element to target.*/, {
    //Parameters are optional.
    style: 1,
    y: 10,
    delay: 0.1,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });

  
  Shery.imageMasker(".project1>img" /* Element to target.*/, {
    //Parameters are optional.
    mouseFollower: true,
    text: "anant",
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
  Shery.makeMagnet(".project1" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
  Shery.makeMagnet(".project2" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
  Shery.makeMagnet(".featwork" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
  Shery.imageEffect(" .one-1img>img", {
    style: 3,
    debug: false,
    config: 
        /* Config made from debug panel */
        {"uFrequencyX":{"value":30.53,"range":[0,100]},"uFrequencyY":{"value":12,"range":[0,100]},"uFrequencyZ":{"value":10,"range":[0,100]},"geoVertex":{"range":[1,64],"value":22.16},"zindex":{"value":"996999","range":[-9999999,9999999]},"aspect":{"value":1.2107835350858929},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.12,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}
      
  });
  Shery.imageEffect(".images", {
    style: 3,
    /*optional parameters
    these parameter dose not applies to custom scroll trigger callback */
    scrollSnapping: true,
    scrollSpeed: 6,
    touchSpeed: 6,
    damping: 7,
  });
  Shery.makeMagnet(".page1-child1>h1" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
  Shery.makeMagnet(".page1-child2>h1" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

var one =document.querySelector(".one");
gsap.from(".one",{
  y:"60px",
  duration:2,
  opacity:0,
  stagger:.1,
  ease:Power3

})
var one =document.querySelector(".two");
gsap.from(".two",{
  y:"40px",
  duration:2,
  opacity:0,
  stagger:.1,
  ease:Power3

})