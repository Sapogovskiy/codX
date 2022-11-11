$(document).ready(function(){
    $('.promo__carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        asNavFor: '.carousel__inner'
      });

      $('.carousel__inner').slick({
        slidesToShow: 4,
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


document.querySelectorAll('.acordeon__btn').forEach((el) => {
    el.addEventListener('click' , () => {
        
        let accordionContent = el.nextElementSibling;
        if (accordionContent.style.maxHeight) {
            document.querySelectorAll('.acordeon__content').forEach((el) => el.style.maxHeight = null)
        } else {
            document.querySelectorAll('.acordeon__content').forEach((el) => el.style.maxHeight = null)
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'
            
        }
    })
});


