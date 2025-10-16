document.addEventListener('DOMContentLoaded', () => {
  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
  });

  // Show/hide FAQs
  const faqs = document.querySelectorAll('.faq');

  faqs.forEach(faq => {
    faq.addEventListener('click', () => {
      faq.classList.toggle('open');

      // Toggle icon
      const icon = faq.querySelector('.faq-icon i');
      if (icon.className.includes('bx-plus')) {
        icon.className = "bx bx-minus";
      } else {
        icon.className = "bx bx-plus";
      }
    });
  });
});



  // === Testimonial Swiper Slider Logic ===
  if (document.querySelector('.card-wrapper')) {
    new Swiper('.card-wrapper', {
      loop: true,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      breakpoints: {
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
      }
    });
  }

//SHOW NAV MENU
const menu = document.querySelector('.nav_menu');
const menuBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');


menuBtn.addEventListener('click', () =>{
    menu.style.display = 'flex';
    closeBtn.style.display = 'inline-block';
    menuBtn.style.display= 'none';
})

// CLOSE NAV MENU
  const closeNav = () => {
    menu.style.display = 'none';
    closeBtn.style.display = 'none';
    menuBtn.style.display = 'inline-block';
  }

  closeBtn.addEventListener('click',closeNav)