<template>
  <!-- Header -->
  <header
    class="w-full fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/50"
  >
    <nav
      class="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16"
    >
      <a href="#home" class="flex items-center gap-2 sm:gap-3">
        <div
          class="w-8 h-8 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center text-white font-semibold text-sm"
        >
          SH
        </div>
        <div
          class="font-playfair text-lg sm:text-xl font-semibold text-gray-900"
        >
          Sweet Home
        </div>
      </a>

      <!-- Desktop Menu -->
      <ul class="hidden md:flex items-center gap-6 lg:gap-8">
        <li>
          <a
            href="#home"
            class="text-sm font-medium text-amber-600 relative after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-0.5 after:bg-amber-600 after:rounded"
            >Home</a
          >
        </li>
        <li>
          <a
            href="#about"
            class="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >About</a
          >
        </li>
        <li>
          <a
            href="#products"
            class="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >Products</a
          >
        </li>
        <li>
          <a
            href="#contact"
            class="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >Contact</a
          >
        </li>
      </ul>

      <a
        href="#contact"
        class="hidden sm:inline-flex bg-gray-900 text-white px-4 lg:px-5 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-all duration-200 hover:-translate-y-0.5"
      >
        Order Now
      </a>

      <!-- Mobile menu button -->
      <button
        id="mobile-menu-btn"
        class="md:hidden flex flex-col gap-1 p-2"
        @click="isOpen = !isOpen"
      >
        <!-- Bars3Icon -->
        <Bars3Icon class="size-6" v-if="!isOpen" />
       
        <!-- XMarkIcon -->
        <XMarkIcon class="size-6" v-else />
        
      </button>
    </nav>

    <!-- Mobile Menu -->
    <div
      id="mobile-menu"
      class="mobile-menu md:hidden fixed top-16 w-full h-screen bg-white/95 backdrop-blur-xl"
      v-bind:class="{ open: isOpen }"
    >
      <ul class="flex flex-col p-6 space-y-4" @click="isOpen = !isOpen">
        <li>
          <a
            href="#home"
            class="block py-3 text-lg font-medium text-amber-600 border-b border-gray-200"
            >Home</a
          >
        </li>
        <li>
          <a
            href="#about"
            class="block py-3 text-lg font-medium text-gray-600 border-b border-gray-200"
            >About</a
          >
        </li>
        <li>
          <a
            href="#products"
            class="block py-3 text-lg font-medium text-gray-600 border-b border-gray-200"
            >Products</a
          >
        </li>
        <li>
          <a
            href="#contact"
            class="block py-3 text-lg font-medium text-gray-600 border-b border-gray-200"
            >Contact</a
          >
        </li>
        <li class="pt-4">
          <a
            href="#contact"
            class="block text-center bg-gray-900 text-white px-6 py-3 rounded-lg font-medium"
          >
            Order Now
          </a>
        </li>
      </ul>
    </div>
  </header>

  <!-- Header -->
  <!-- <header class="block lg:hidden">
    <nav
      class="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16"
    >
      <a href="#home" class="flex items-center gap-2 sm:gap-3">
        <div
          class="w-8 h-8 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center text-white font-semibold text-sm"
        >
          SH
        </div>
        <div
          class="font-playfair text-lg sm:text-xl font-semibold text-gray-900"
        >
          Sweet Home
        </div>
      </a>
    </nav>
  </header> -->
</template>

<script>
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline';

export default {
  data() {
    return {
      isOpen: false,
    };
  },

  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
  },

  mounted() {},

  components: {
    Bars3Icon,
    XMarkIcon,
  },
};
</script>
