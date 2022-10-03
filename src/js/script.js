$(document).ready(function(){
    $('.promo__carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.carousel__inner'
      });
    // $('.carousel__inner').slick({
    //     infinite: true,
    //     arrows: false,
    //     asNavFor: '.promo__carousel',
    //     autoplay: true,
    //     autoplaySpeed: 2000,
    //     slidesToShow: 2,
    //     slidesToScroll: 1
    //   });

      $('.carousel__inner').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        asNavFor: '.promo__carousel',
        dots: false,
        centerMode: true,
        focusOnSelect: true
      });
  });


const tabsBtn = document.querySelectorAll(".tabs__nav-btn");
const tabsItems = document.querySelectorAll(".tabs__item");

tabsBtn.forEach(function(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab")
        let currentTab = document.querySelector(tabId);

        if( ! currentBtn.classList.contains('active') ) {
            tabsBtn.forEach(function(item) {
                item.classList.remove('active');
            });
    
            tabsItems.forEach(function(item) {
                item.classList.remove('active');
            });
    
            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }

        
    });
});

document.querySelector('.tabs__nav-btn').click();



