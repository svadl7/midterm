//script for mobile menu widget
const menu_btn=document.querySelector(".hamburger");
const mobile_menu=document.querySelector(".mobile-menu");
menu_btn.addEventListener('click',function(){
  menu_btn.classList.toggle('is-active');
  mobile_menu.classList.toggle('is-active');
})

//script for slider my work
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("work");
  let dots = document.getElementsByClassName("dot");
  
  if (n > slides.length) {
    slideIndex = 1;
  }
  
  if (n < 1) {
    slideIndex = slides.length;
  }
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

//script for achievemnets slider
let slide_num = 1;
showachievements(slide_num);

function plusach(n) {
  showachievements(slide_num += n);
}

function currentaward(n) {
  showachievements(slide_num = n);
}

function showachievements(n) {
  let i;
  let slidesach = document.getElementsByClassName("ach");
  let dotsach = document.getElementsByClassName("dotach");
  
  if (n > slidesach.length) {
    slide_num = 1;
  }
  
  if (n < 1) {
    slide_num = slidesach.length;
  }
  
  for (i = 0; i < slidesach.length; i++) {
    slidesach[i].style.display = "none";
  }
  
  for (i = 0; i < dotsach.length; i++) {
    dotsach[i].className = dotsach[i].className.replace(" activeach", "");
  }
  
  slidesach[slide_num - 1].style.display = "block";
  dotsach[slide_num - 1].className += " activeach";
}

//return to top script
document.addEventListener('DOMContentLoaded', () => {
  const returnButton = document.getElementById('return-to-top');

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
      returnButton.style.display = 'block';
    } else {
      returnButton.style.display = 'none';
    }
  });

  returnButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

