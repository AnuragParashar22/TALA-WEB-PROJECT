function show(){
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}
show();


var loader = document.querySelector("#loader");
var span = document.querySelector("#loader>h1>span")
var grow = 0;
setInterval(() => {
  if(grow<101){
    span.innerHTML = `${grow}` ;
    grow++;
  }
  else{
    loader.style.transform = `translateY(-100%)`
  }
}, 30);





var circle = document.querySelector("#circle")
window.addEventListener("mousemove",function(dets){
  circle.style.left = `${dets.x+50}px`;
  circle.style.top = `${dets.y+50}px`;

})








var menu = document.querySelector("#menu")
screen = document.querySelector("#fullscreen")
nav = document.querySelector("#nav>h2")
navparttext = document.querySelector("#navpart2>h3")
line1 = document.querySelector("#line1")
line2 = document.querySelector("#line2")
menu = document.querySelector("#menu")
var flag = 0 

  menu.addEventListener("click",function(){
    if( flag === 0){
    screen.style.transform = `translateY(0%)`
     nav.style.color = "#232025"
     navparttext.style.color = "#232025"
     line1.style.backgroundColor = '#232025'
     line2.style.backgroundColor = '#232025'
     line2.style.width = '100%'
   
     menu.style.justifyContent = 'center'
     line1.style.transform  = 'rotate(135deg)'
     line2.style.transform  = 'rotate(-130deg)'
     flag = 1;}
     else{
      
        screen.style.transform = `translateY(-100%)`
         nav.style.color = "#eee"
         navparttext.style.color = "#eee"
         line1.style.backgroundColor = '#eee'
         line2.style.backgroundColor = '#eee'
         line2.style.width = '80%'
         menu.style.justifyContent = 'space-between'
         line1.style.transform  = 'rotate(0deg)'
         line2.style.transform  = 'rotate(0deg)'
         flag = 0;

     }

})

var flavourname = document.querySelectorAll('#flavourname>h2')
var flavour = document.querySelectorAll('.flavour') 
flavour.forEach(function(elem){
  elem.addEventListener("mousemove",function(dets){
   
    elem.children[2].style.opacity = 1;
    elem.children[1].style.left = `${dets.x}px`
    elem.children[0].children[1].style.color = '#232025'
    elem.children[0].children[1].style.zIndex = '99'
    elem.children[1].style.opacity = 1;
    elem.children[1].children[2].style.opacity = 1;
   
    // elem.children[1].style.top = `${dets.y}px`
  })
  elem.addEventListener("mouseleave",function(){
    elem.children[0].children[1].style.color = '#eee'
    elem.children[1].style.opacity = 0;
    elem.children[2].style.opacity = 0;
  })
})

var page9boxtext2 = document.querySelectorAll(".yesno");
page9boxtext2.forEach(function(elem){
  elem.addEventListener("mousemove",function(dets){
    elem.addEventListener("mouseenter",function(dets){
      elem.children[1].style.opacity = 1;
    })
   
    elem.children[1].style.left = `${dets.x-50}px`
    elem.children[1].style.top = `${dets.y-100}px`
  })
  elem.addEventListener("mouseleave",function(dets){
    elem.children[1].style.opacity = 0;
    
  })
 
})





gsap.to("#page6box>img",{
  rotate:"360deg",
  repeat:-1,
  ease: Power0.easeNone,
  duration:2
})

var tl = gsap.timeline();

tl
.from("#nav",{
    y:-20,
    opacity:0,
    delay:5.5
})
.from("#maintext",{
  y:30,
  opacity:0,
 
})
.from("#subtext",{
  y:30,
  opacity:0,
})
.from("#subtext2",{
  y:30,
  opacity:0,
})
.from("#page2>img",{
  y:30,
  opacity:0,
})
.to("#page2>img",{
  scale:1,
   scrollTrigger:{
    trigger:"#page2>img",
    scroller:"#main",
   
    start:"top 70%",
    scrub:true
   }
})

gsap.from("#page3>h1",{
  y:20,
  opacity:0,
  stagger:0.3,
  scrollTrigger:{
    trigger:"#page3>h1",
    scroller:"#main",

    start:"top 70%",
    end:"top 10%",
    scrub:true
  },
  ease:Linear.easeNone
})
gsap.from(".ri-sun-fil , #available",{
  y:10,
  opacity:0,
  ease:Linear.easeNone,
  scrollTrigger:{
    trigger:"#page4",
    scroller:"#main",

    start:"top 70%",
    end:"top 50%",
    scrub:true
  }
})
gsap.from("#line",{
  width:"80vw",
  duration:1,
  ease:Linear.easeNone,
  scrollTrigger:{
    trigger:"#page4",
    scroller:"#main",

    start:"top 80%",
    end:"top 70%",
    scrub:true
  }
})
gsap.from("#mango",{
  y:10,
  opacity:0,
  duration:1,
  ease:Linear.easeNone,
  scrollTrigger:{
    trigger:"#mango",
    scroller:"#main",

    start:"top 60%",
    end:"top 30%",
    scrub:true
  }
})
gsap.from("#banana",{
  y:10,
  opacity:0,
  duration:1,
  ease:Linear.easeNone,
  scrollTrigger:{
    trigger:"#banana",
    scroller:"#main",
  
    start:"top 60%",
    end:"top 40%",
    scrub:true
  }
})
gsap.from("#pineapple",{
  y:10,
  opacity:0,
  duration:1,
  ease:Linear.easeNone,
  scrollTrigger:{
    trigger:"#pineapple",
    scroller:"#main",

    start:"top 60%",
    end:"top 50%",
    scrub:true
  }
})
gsap.from("#pitahaya",{
  y:10,
  opacity:0,
  duration:1,
  ease:Linear.easeNone,
  scrollTrigger:{
    trigger:"#pitahaya",
    scroller:"#main",
   
    start:"top 60%",
    end:"top 50%",
    scrub:true
  }
})
gsap.from("#variety",{
  y:10,
  opacity:0,
  duration:1,
  ease:Linear.easeNone,
  scrollTrigger:{
    trigger:"#variety",
    scroller:"#main",
    start:"top 65%",
    end:"top 60%",
    scrub:true
  }
})

gsap.from("#page5text>h1",{
  y:50,
  opacity:0,
  stagger:0.5,
  duration:2,
  ease:Linear.easeNone,
  scrollTrigger:{
    trigger:"#page5text>h1",
    scroller:"#main",
 
    start:"top 70%",
    end:"top 30%",
    scrub:true
  }
})

gsap.from("#page5box-left>h2 , #page5box-right>h2",{
  y:50,
  opacity:0,
  ease:Linear.easeNone,
  scrollTrigger:{
    trigger:"#page5box",
    scroller:"#main",
  
    start:"top 80%",
    end:"top 60%",
    scrub:true
  }
})

gsap.from("#page6boxtext1",{
  y:50,
  opacity:0,
  ease:Linear.easeNone,
  scrollTrigger:{
    trigger:"#page6boxtext1",
    scroller:"#main",
  
    start:"top 70%",
    end:"top 50%",
    scrub:true
  }
})
gsap.from("#page6boxtext2>h6",{
  y:20,
  opacity:0,
  stagger:0.5,
  ease:Linear.easeNone,
  scrollTrigger:{
    trigger:"#page6boxtext2>h6",
    scroller:"#main",
  
    start:"top 70%",
    end:"top 50%",
    scrub:true
  }
})
gsap.from("#page7text>h2",{
  y:30,
  opacity:0,
  stagger:0.5,
  ease:Linear.easeNone,
  scrollTrigger:{
    trigger:"#page7text>h2",
    scroller:"#main",
  
    start:"top 60%",
    end:"top 30%",
    scrub:true
  }
})

gsap.from("#page8one>h1",{
  x:400,
  duration:6,
  ease:Linear.easeNone,
  scrollTrigger:{
    trigger:"#page8one",
    scroller:"#main",

    start:"top 80%",
    end:"top -10%",
    scrub:true
  }
})
gsap.from("#page8three>h1",{
  x:400,
  duration:6,
  ease:Linear.easeNone,
  scrollTrigger:{
    trigger:"#page8three",
    scroller:"#main",

    start:"top 80%",
    end:"top 0%",
    scrub:true
  }
})
gsap.from("#page8five>h1",{
  x:400,
  duration:6,
  ease:Linear.easeNone,
  scrollTrigger:{
    trigger:"#page8five",
    scroller:"#main",

    start:"top 80%",
    end:"top -10%",
    scrub:true
  }
})
gsap.from("#page8two>h1",{
  x:-400,
  duration:6,
  ease:Linear.easeNone,
  scrollTrigger:{
    trigger:"#page8two",
    scroller:"#main",
   
    start:"top 80%",
    end:"top 0%",
    scrub:true
  }
})
gsap.from("#page8four>h1",{
  x:-400,
  duration:6,
  ease:Linear.easeNone,
   scrollTrigger:{
    trigger:"#page8four",
    scroller:"#main",
    
    start:"top 80%",
    end:"top 0%",
    scrub:true
  }
})
gsap.from("#page9boxtext1>h2",{
  y:20,
  opacity:0,
  stagger:0.2,
  ease:Linear.easeNone,
   scrollTrigger:{
    trigger:"#page9boxtext1>h2",
    scroller:"#main",

    start:"top 70%",
    end:"top 40%",
    scrub:true
  }
})
gsap.from("#yestext,#notext",{
  y:10,
  opacity:0,

  ease:Linear.easeNone,
   scrollTrigger:{
    trigger:".yesno",
    scroller:"#main",
 
    start:"top 70%",
    end:"top 50%",
    scrub:true
  }
})
gsap.from("#page10text>h2",{
  y:20,
  opacity:0,
  ease:Linear.easeNone,
   scrollTrigger:{
    trigger:"#page10text",
    scroller:"#main",
  
    start:"top 70%",
    end:"top 50%",
    scrub:true
  }
})
gsap.from("#instapage10",{
  y:20,
  opacity:0,
  ease:Linear.easeNone,
   scrollTrigger:{
    trigger:"#instapage10",
    scroller:"#main",
   
    start:"top 110%",
    end:"top 90%",
    scrub:true
  }
})
gsap.from("#page11boxone>.page11boxes",{
  y:50,
  opacity:0,
  ease: Power1.easeOut,
  stagger:1,
  duration:2,
   scrollTrigger:{
    trigger:"#page11boxone>.page11boxes",
    scroller:"#main",
  
    start:"top 60%",
    end:"top 30%",
    scrub:true
  }
})
gsap.from("#page11boxtwo>.page11boxes",{
  y:50,
  opacity:0,
  ease: Power1.easeOut,
  stagger:1,
  duration:2,
   scrollTrigger:{
    trigger:"#page11boxtwo>.page11boxes",
    scroller:"#main",
  
    start:"top 60%",
    end:"top 40%",
    scrub:true
  }
})
gsap.from("#page11boxthree>.page11boxes",{
  y:50,
  opacity:0,
  ease: Power1.easeOut,
  stagger:1,
  duration:5,
   scrollTrigger:{
    trigger:"#page11boxthree>.page11boxes",
    scroller:"#main",
 
    start:"top 60%",
    end:"top 30%",
    scrub:true
  }
})