const headerNav =document.querySelector(".header-nav")
const body = document.body;
const mainHeader = document.querySelector(".main-header")
const heroBanner = document.querySelector(".hero-banner")

document.querySelector(".nav-icon").addEventListener("click", function() {
    headerNav.setAttribute("mobile-nav", "true");
    body.classList.add("header-nav-active")
})

const closeHederNav = () => {
    headerNav.setAttribute("mobile-nav", "false");
    body.classList.remove("header-nav-active")
}

window.addEventListener('scroll', function() {
    scrollpos = window.scrollY;
    if(scrollpos >= 100){
        mainHeader.classList.add("fixed");
        heroBanner.style.marginTop = "100px"
    }
    else{
        mainHeader.classList.remove("fixed")
        heroBanner.style.marginTop = "0"
    }
})

new WOW().init();


var sections = $('section, header')
  , nav = $('.header-nav')
  , nav_height = nav.outerHeight();

$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();
  
  sections.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();
    
    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('.nav-item').removeClass('active');
      sections.removeClass('active');
      
      $(this).addClass('active');
      nav.find('.nav-item[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
  });
});

nav.find('.nav-item').on('click', function () {
  var $el = $(this)
    , id = $el.attr('href');
  
  $('html, body').animate({
    scrollTop: $(id).offset().top - nav_height
  }, 500);
  
  return false;
});