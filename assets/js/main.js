/**
* Template Name: Impact
* Updated: Jul 27 2023 with Bootstrap v5.3.1
* Template URL: https://bootstrapmade.com/impact-bootstrap-business-website-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Sticky Header on Scroll
   */
  const selectHeader = document.querySelector('#header');
  if (selectHeader) {
    let headerOffset = selectHeader.offsetTop;
    let nextElement = selectHeader.nextElementSibling;

    const headerFixed = () => {
      if ((headerOffset - window.scrollY) <= 0) {
        selectHeader.classList.add('sticked');
        if (nextElement) nextElement.classList.add('sticked-header-offset');
      } else {
        selectHeader.classList.remove('sticked');
        if (nextElement) nextElement.classList.remove('sticked-header-offset');
      }
    }
    window.addEventListener('load', headerFixed);
    document.addEventListener('scroll', headerFixed);
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = document.querySelectorAll('#navbar a');

  function navbarlinksActive() {
    navbarlinks.forEach(navbarlink => {

      if (!navbarlink.hash) return;

      let section = document.querySelector(navbarlink.hash);
      if (!section) return;

      let position = window.scrollY + 200;

      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active');
      } else {
        navbarlink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navbarlinksActive);
  document.addEventListener('scroll', navbarlinksActive);

  /**
   * Mobile nav toggle
   */
  const mobileNavShow = document.querySelector('.mobile-nav-show');
  const mobileNavHide = document.querySelector('.mobile-nav-hide');

  document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
    el.addEventListener('click', function (event) {
      event.preventDefault();
      mobileNavToogle();
    })
  });

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavShow.classList.toggle('d-none');
    mobileNavHide.classList.toggle('d-none');
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navbar a').forEach(navbarlink => {

    if (!navbarlink.hash) return;

    let section = document.querySelector(navbarlink.hash);
    if (!section) return;

    navbarlink.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

  navDropdowns.forEach(el => {
    el.addEventListener('click', function (event) {
      if (document.querySelector('.mobile-nav-active')) {
        event.preventDefault();
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('dropdown-active');

        let dropDownIndicator = this.querySelector('.dropdown-indicator');
        dropDownIndicator.classList.toggle('bi-chevron-up');
        dropDownIndicator.classList.toggle('bi-chevron-down');
      }
    })
  });

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
    const togglescrollTop = function () {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
    window.addEventListener('load', togglescrollTop);
    document.addEventListener('scroll', togglescrollTop);
    scrollTop.addEventListener('click', window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }));
  }

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Clients Slider
   */
  new Swiper('.clients-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 60
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 80
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 120
      }
    }
  });

  /**
   * Init swiper slider with 1 slide at once in desktop view
   */
  new Swiper('.slides-1', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  /**
   * Init swiper slider with 3 slides at once in desktop view
   */
  new Swiper('.slides-3', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40
      },

      1200: {
        slidesPerView: 3,
      }
    }
  });

  /**
   * Porfolio isotope and filter
   */
  let portfolionIsotope = document.querySelector('.portfolio-isotope');

  if (portfolionIsotope) {

    let portfolioFilter = portfolionIsotope.getAttribute('data-portfolio-filter') ? portfolionIsotope.getAttribute('data-portfolio-filter') : '*';
    let portfolioLayout = portfolionIsotope.getAttribute('data-portfolio-layout') ? portfolionIsotope.getAttribute('data-portfolio-layout') : 'masonry';
    let portfolioSort = portfolionIsotope.getAttribute('data-portfolio-sort') ? portfolionIsotope.getAttribute('data-portfolio-sort') : 'original-order';

    window.addEventListener('load', () => {
      let portfolioIsotope = new Isotope(document.querySelector('.portfolio-container'), {
        itemSelector: '.portfolio-item',
        layoutMode: portfolioLayout,
        filter: portfolioFilter,
        sortBy: portfolioSort
      });

      let menuFilters = document.querySelectorAll('.portfolio-isotope .portfolio-flters li');
      menuFilters.forEach(function (el) {
        el.addEventListener('click', function () {
          document.querySelector('.portfolio-isotope .portfolio-flters .filter-active').classList.remove('filter-active');
          this.classList.add('filter-active');
          portfolioIsotope.arrange({
            filter: this.getAttribute('data-filter')
          });
          if (typeof aos_init === 'function') {
            aos_init();
          }
        }, false);
      });

    });

  }

  /**
   * Animation on scroll function and init
   */
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });

});




// banner

jQuery('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
})



// jQuery(document).ready(function () {
//   jQuery(".menu-chat").click(function () {

//     jQuery(".chat-menu-container").toggle("slow")
//   });
//   jQuery(".chat-side-menu").click(function () {

//     jQuery(".chat-menu-container").toggle("slow")
//   });

// });





// mic chat-bot


$("#playButton").click(function () { $("#playButton span").html($("#playButton span").html() == '<div class="dot-elastic"></div>' ? '<i class="fa fa-microphone mic-chatbot" aria-hidden="true"></i>' : '<div class="dot-elastic"></div>'); });


// full screen

jQuery(document).ready(function () {
  jQuery(".full-screen-btn").click(function () {
    jQuery("#chat-bot-container").toggleClass("full-screen-chatboat");
    jQuery("body").toggleClass("full-screen-chatboat-body");
    jQuery("#feedback").toggleClass("full-screen-chatboat-feedback");

  });
});


// scroll-bar 

// document.getElementById("scroll-bottom").classList.add("d-none");
// document.getElementById("scroll-bottom").classList.add("d-none");
const scrollToBottom = () => {
  // get the div element by its id  
  const div = document.getElementById("ContentChat");
  // smooth scroll to the bottom of the div 
  div.scrollTo({ top: div.scrollHeight, behavior: 'smooth' });
  // document.getElementById("scroll-top").classList.add("d-block");
  // document.getElementById("scroll-top").classList.remove("d-none");
  // document.getElementById("scroll-bottom").classList.remove("d-none");
}



const scrollToTop = () => {
  const div = document.getElementById("ContentChat");
  div.scrollTo({ top: 0, behavior: 'smooth' });
  // document.getElementById("scroll-bottom").classList.add("d-none");
  // document.getElementById("scroll-bottom").classList.add("d-block");
  // document.getElementById("scroll-top").classList.add("d-none");

}


// $("#ContentChat").scroll(function () {
//   var scroll = $("#ContentChat").scrollTop();
//   if (scroll >= 500) { $("#scroll-top").addClass("d-block"); }
//   else { $("#scroll-top").removeClass("d-block"); }
// });


$("#ContentChat").scroll(function () {
  if ($(this).scrollTop() >= 50) {
    $('#scrolling').removeClass('d-none');
  }
  else {
    $('#scrolling').addClass('d-none');

  }
});




// const scrollToTop = () => {
//   // get the div element by its id  
//   const div = document.getElementById("ContentChat");
//   // smooth scroll to the bottom of the div 
//   div.scrollTo({ bottom: div.scrollHeight, behavior: 'smooth' });
// }




$('div.dropdown').hover(function () {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function () {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});








$.fn.jQuerySimpleCounter = function (options) {
  var settings = $.extend({
    start: 0,
    end: 100,
    easing: 'swing',
    duration: 400,
    complete: ''
  }, options);

  var thisElement = $(this);

  $({ count: settings.start }).animate({ count: settings.end }, {
    duration: settings.duration,
    easing: settings.easing,
    step: function () {
      var mathCount = Math.ceil(this.count);
      thisElement.text(mathCount);
    },
    complete: settings.complete
  });
};


$('#number1').jQuerySimpleCounter({ end: 12, duration: 10000 });
$('#number2').jQuerySimpleCounter({ end: 55, duration: 10000 });
$('#number3').jQuerySimpleCounter({ end: 359, duration: 10000 });
$('#number4').jQuerySimpleCounter({ start: 11900, end: 12000, duration: 10000 });
$('#number5').jQuerySimpleCounter({ end: 200, duration: 10000 });


/* AUTHOR LINK */
$('.about-me-img').hover(function () {
  $('.authorWindowWrapper').stop().fadeIn('fast').find('p').addClass('trans');
}, function () {
  $('.authorWindowWrapper').stop().fadeOut('fast').find('p').removeClass('trans');
});









$(document).ready(function () {
  $(".drawerr-navigation").css("display", "none");

  $(".drawerr-item-has-submenu").click(function () {

    $(".drawerr-navigation").css("display", "block");

  });

  $(".drawerr-navigation").click(function () {
    $(".drawerr-navigation").css("display", "none");

  });

});

new Swiper('.article-slides-3', {
  speed: 600,
  loop: false,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  slidesPerView: 'auto',
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 40
    },

    1200: {
      slidesPerView: 3,
    }
  }
});

// Get the rating radio buttons and query box element
const ratingButtons = document.querySelectorAll('input[name="rating"]');
const queryBox = document.querySelector('.query-box');

// Add event listener to rating radio buttons
ratingButtons.forEach(ratingButton => {
  ratingButton.addEventListener('change', function () {
    const selectedRating = parseInt(this.id.split('-')[1]);
    // If rating is 3 or below, show the query box, else hide it
    if (selectedRating <= 3) {
      queryBox.style.display = 'block';
      document.querySelector('#conf-text').innerText = 'Submit';
      document.querySelector('#conf-text').value = 'Submit';

    } else {
      queryBox.style.display = 'none';
      document.querySelector('#conf-text').innerText = 'Confirm';
      document.querySelector('#conf-text').value = 'Confirm';

    }
  });
});

// Add event listener to the "Send Query" button if needed
const sendQueryButton = document.querySelector('.send-query-btn');
if (sendQueryButton) {
  sendQueryButton.addEventListener('click', function () {
    // Handle sending the query here
    const queryText = document.getElementById('query-textbox').value;

    console.log('User Query:', queryText);
  });
}



// $('.odometer').html(80)



