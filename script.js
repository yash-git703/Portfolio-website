// Menu button activation
let menuBtn = document.querySelector('#menu-btn');
let menuBar = document.querySelector('.menu-bar');

menuBtn.onclick = () => {
    menuBtn.classList.toggle('bx-x');
    menuBar.classList.toggle('active');
}

// Typing animation
var animText = new Typed(".animated-text", {
    strings:['Web Developer','Frontend Developer','Hobby Artist'],
    backspeed:100,
    typeSpeed:100,
    backDelay:1000,
    loop:true
})


var icon = document.getElementById("icon");
icon.onclick = function(){
    document.body.classList.toggle("dark-theme")
    if(document.body,this.classList.contains("dark-theme")){
        icon.src = "./sun.png" ;
     
        //   icon.src = "./moon.png";

    }else{
         icon.src = "./moon.png" ;
        

    }
}
