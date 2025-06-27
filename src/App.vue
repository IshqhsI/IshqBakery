<script setup>
import Header from './components/Header.vue';
import Hero from './components/Hero.vue';
import About from './components/About.vue';
import Products from './components/Products.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';

import { onMounted } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css'

function initSmoothScroll() {
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
}

function initScrollSpy() {
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    let current = '';
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
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
}

function optimizeMobileAnimations() {
  const isMobile = window.innerWidth <= 768;
  if (isMobile) {
    document.querySelectorAll('.animate-float').forEach((el) => {
      el.style.animationDuration = '4s';
    });
    document.querySelectorAll('.animate-bounce-slow').forEach((el) => {
      el.style.animationDuration = '2s';
    });
  }
}

function initAOS() {
  AOS.init({
    duration: 800,
    once: true,
    offset: 10,
  });
}

onMounted(() => {
  initSmoothScroll();
  initScrollSpy();
  optimizeMobileAnimations();
  initAOS();
});
</script>

<template>
  <!-- Header Section -->
  <Header />

  <!-- Hero Section -->
  <Hero />

  <!-- About Section -->
  <About />

  <!-- Products Section -->
  <Products />

  <!-- Contact Section -->
  <Contact />

  <!-- Footer -->
  <Footer />
</template>

<style scoped></style>
