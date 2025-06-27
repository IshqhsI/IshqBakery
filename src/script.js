// // Initialize AOS
// AOS.init({
//   duration: 800,
//   once: true,
//   offset: 10,
// });

// // Mobile menu toggle
// const mobileMenuBtn = document.getElementById('mobile-menu-btn');
// const mobileMenu = document.getElementById('mobile-menu');
// const mobileMenuLinks = mobileMenu.querySelectorAll('a');

// mobileMenuBtn.addEventListener('click', () => {
//   mobileMenu.classList.toggle('open');

//   // Animate hamburger to X
//   const spans = mobileMenuBtn.querySelectorAll('span');
//   if (mobileMenu.classList.contains('open')) {
//     spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
//     spans[1].style.opacity = '0';
//     spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
//   } else {
//     spans[0].style.transform = 'rotate(0) translate(0, 0)';
//     spans[1].style.opacity = '1';
//     spans[2].style.transform = 'rotate(0) translate(0, 0)';
//   }
// });

// // Close mobile menu when clicking on links
// mobileMenuLinks.forEach((link) => {
//   link.addEventListener('click', () => {
//     mobileMenu.classList.remove('open');
//     const spans = mobileMenuBtn.querySelectorAll('span');
//     spans[0].style.transform = 'rotate(0) translate(0, 0)';
//     spans[1].style.opacity = '1';
//     spans[2].style.transform = 'rotate(0) translate(0, 0)';
//   });
// });

// // Smooth scrolling for navigation links
// document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
//   anchor.addEventListener('click', function (e) {
//     e.preventDefault();
//     const target = document.querySelector(this.getAttribute('href'));
//     if (target) {
//       target.scrollIntoView({
//         behavior: 'smooth',
//         block: 'start',
//       });
//     }
//   });
// });

// // Form submission
// document.querySelector('form').addEventListener('submit', function (e) {
//   e.preventDefault();
//   alert(
//     'Terima kasih! Pesanan Anda telah diterima. Tim kami akan segera menghubungi Anda.'
//   );
// });

// // Update active navigation link on scroll
// window.addEventListener('scroll', () => {
//   const sections = document.querySelectorAll('section[id]');
//   const navLinks = document.querySelectorAll('nav a[href^="#"]');

//   let current = '';
//   sections.forEach((section) => {
//     const sectionTop = section.offsetTop;
//     const sectionHeight = section.clientHeight;
//     if (scrollY >= sectionTop - 200) {
//       current = section.getAttribute('id');
//     }
//   });

//   navLinks.forEach((link) => {
//     link.classList.remove('text-amber-600');
//     link.classList.add('text-gray-600');
//     if (link.getAttribute('href') === `#${current}`) {
//       link.classList.remove('text-gray-600');
//       link.classList.add('text-amber-600');
//     }
//   });
// });

// // Close mobile menu when clicking outside
// document.addEventListener('click', (e) => {
//   if (
//     !mobileMenu.contains(e.target) &&
//     !mobileMenuBtn.contains(e.target) &&
//     mobileMenu.classList.contains('open')
//   ) {
//     mobileMenu.classList.remove('open');
//     const spans = mobileMenuBtn.querySelectorAll('span');
//     spans[0].style.transform = 'rotate(0) translate(0, 0)';
//     spans[1].style.opacity = '1';
//     spans[2].style.transform = 'rotate(0) translate(0, 0)';
//   }
// });

// // Optimize animations for mobile devices
// const isMobile = window.innerWidth <= 768;
// if (isMobile) {
//   // Reduce animation complexity on mobile for better performance
//   document.querySelectorAll('.animate-float').forEach((el) => {
//     el.style.animationDuration = '4s';
//   });
//   document.querySelectorAll('.animate-bounce-slow').forEach((el) => {
//     el.style.animationDuration = '2s';
//   });
// }
