

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}


window.onscroll = () =>{
    
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
    // top
    if (window.scrollY >= 400 ) {
        totop.style="opacity:1;  visibility: visible;";  
    }else{
        totop.style="opacity:0;  visibility: hidden;";  
    }
}

var totop=document.getElementById("totop");

// to top
totop.onclick=() =>{
    window.scrollTo(0,0);
}
// our product
// hart icon
var hr1=document.getElementById('heart1');
var hr2=document.getElementById('heart2');
var hr3=document.getElementById('heart3');
hr1.onclick=()=>{
    if (hr1.style.color=="red") {
        hr1.style.color="#fff";
    }else{
        hr1.style.color="red";
    }


}
hr2.onclick=()=>{
    if (hr2.style.color=="red") {
        hr2.style.color="#fff";
    }else{
        hr2.style.color="red";
    }
   
 }
 hr3.onclick=()=>{
      if (hr3.style.color=="red") {
        hr3.style.color="#fff";
    }else{
        hr3.style.color="red";
    }
}

// eye
var eye1=document.getElementById('eye1');
var eye2=document.getElementById('eye2');
var eye3=document.getElementById('eye3');
eye3.onclick=()=>{
    document.querySelector(".e3").style.display="flex";
    document.getElementById("ly").style.display="flex";
}
document.getElementById("ic").onclick=()=>{
    
        document.querySelector(".e3").style.display="none";
        document.getElementById("ly").style.display="none";
        

}