// // Initialize AOS
// AOS.init({
//   duration: 800,
//   once: true,
//   offset: 10,
// });

// // Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  });
});

// // Form submission
// document.querySelector('form').addEventListener('submit', function (e) {
//   e.preventDefault();
//   alert(
//     'Terima kasih! Pesanan Anda telah diterima. Tim kami akan segera menghubungi Anda.'
//   );
// });

// // Update active navigation link on scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav a[href^="#"]');

  let current = '';
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove('text-amber-600');
    link.classList.add('text-gray-600');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.remove('text-gray-600');
      link.classList.add('text-amber-600');
    }
  });
});

// // Optimize animations for mobile devices
const isMobile = window.innerWidth <= 768;
if (isMobile) {
  // Reduce animation complexity on mobile for better performance
  document.querySelectorAll('.animate-float').forEach((el) => {
    el.style.animationDuration = '4s';
  });
  document.querySelectorAll('.animate-bounce-slow').forEach((el) => {
    el.style.animationDuration = '2s';
  });
}
