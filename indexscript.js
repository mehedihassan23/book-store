
 let menu = document.querySelector('#menu-bars');
 let navbar = document.querySelector('.navbar');

 menu.onclick = () => {
     menu.classList.toggle('fa-times');
     navbar.classList.toggle('active');
 }

 window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

document.querySelector('#search-icon').onclick = () => {
    document.querySelector('#search-form').classList.toggle('active');

}
document.querySelector('#close').onclick = () => {
    document.querySelector('#search-form').classList.remove('active');

}

/*swipper javascript for animattion in home section */
var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop:true,
});






var swiper = new Swiper(".review-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });
  



/*loader section function */

function loader(){
  document.querySelectorAll('.loader-container').classList.add('fade-out');
}


function fadeOut(){
  setInterval(loader, 3000);
}

window.onload = fadeOut;


