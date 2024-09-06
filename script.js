const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function page3Animation(){
    var elemC = document.querySelector("#elem-container");
var fixed = document.querySelector("#fixed-image");

elemC.addEventListener("mouseenter",function(){
    fixed.style.display = "block"
});

elemC.addEventListener("mouseleave",function(){
    fixed.style.display = "none"
})

var elems = document.querySelectorAll(".elem");

elems.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var image = e.getAttribute("data-image");
        fixed.style.backgroundImage = `url(${image})`
    })
})

}



function swiperAnimation(){

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 20,
      });
}

page3Animation();
swiperAnimation();

function page4Cursor(){
    
const page4 = document.querySelector("#page4");
const cursor = document.querySelector(".cursor");

page4.addEventListener("mousemove",(dets)=>{
    cursor.style.transform = `translate(${dets.clientX}px,${dets.clientY}pxa)`;
})

}

