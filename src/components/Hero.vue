<template>
  <section
    id="home"
    class="max-w-full min-h-screen bg-hero flex items-center relative overflow-hidden z-0"
  >
    <!-- Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div
        class="absolute top-1/4 left-1/4 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-gradient-to-r from-orange-300/20 to-amber-300/20 rounded-full blur-3xl animate-float"
      ></div>
      <div
        class="absolute bottom-1/4 right-1/4 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-gradient-to-r from-amber-300/15 to-orange-400/15 rounded-full blur-3xl animate-float"
        style="animation-delay: -3s"
      ></div>
    </div>

    <div
      class="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 items-center gap-8 lg:gap-12 relative z-100 py-8"
    >
      <!-- Content -->
      <div class="text-white space-y-4 sm:space-y-6 text-center lg:text-left">
        <div
          class="text-amber-200 font-medium tracking-wide uppercase text-xs sm:text-sm"
          data-aos="fade-up"
        >
          Premium Home Bakery
        </div>

        <h1
          class="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Homemade
          <span class="text-amber-200">Dessert</span>
        </h1>

        <p
          class="text-base sm:text-lg lg:text-xl text-white/90 max-w-lg mx-auto lg:mx-0"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Dibuat dengan cinta & bahan berkualitas tinggi untuk momen spesial
          Anda
        </p>

        <!-- Stats -->
        <div
          class="flex justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-8 pt-4"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div class="text-center">
            <div
              class="text-xl sm:text-2xl lg:text-3xl font-bold text-amber-200"
            >
              500+
            </div>
            <div class="text-xs sm:text-sm text-white/80">Happy Customers</div>
          </div>
          <div class="text-center">
            <div
              class="text-xl sm:text-2xl lg:text-3xl font-bold text-amber-200"
            >
              5★
            </div>
            <div class="text-xs sm:text-sm text-white/80">Rating</div>
          </div>
          <div class="text-center">
            <div
              class="text-xl sm:text-2xl lg:text-3xl font-bold text-amber-200"
            >
              100%
            </div>
            <div class="text-xs sm:text-sm text-white/80">Fresh Made</div>
          </div>
        </div>

        <div class="pt-4" data-aos="fade-up" data-aos-delay="400">
          <a
            href="#products"
            class="inline-flex items-center gap-2 bg-white text-amber-800 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-amber-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            Lihat Produk Kami
            <svg
              class="w-4 h-4 sm:w-5 sm:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>

      <!-- Visual -->
      <div
        class="flex justify-center lg:justify-end order-first lg:order-last"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        <div class="relative">
          <!-- Main circle -->
          <div
            class="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full glass animate-pulse-glow flex items-center justify-center relative"
          >
            <!-- Rotating border -->
            <div
              class="absolute inset-0 rounded-full border-2 border-dashed border-white/30 animate-rotate-slow"
            ></div>

            <!-- Center cake -->
            <div class="text-7xl sm:text-7xl lg:text-8xl animate-bounce-slow">
              🎂
            </div>

            <!-- Badge -->
            <div
              class="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 bg-gradient-to-r from-red-500 to-pink-500 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg animate-pulse"
            >
              Premium Quality
            </div>
          </div>

          <!-- Floating elements -->
          <div
            class="absolute top-4 sm:top-8 left-4 sm:left-8 text-2xl sm:text-3xl lg:text-4xl animate-float"
            style="animation-delay: -1s"
          >
            🧁
          </div>
          <div
            class="absolute top-6 sm:top-12 right-6 sm:right-12 text-xl sm:text-2xl lg:text-3xl animate-float"
            style="animation-delay: -2s"
          >
            🍰
          </div>
          <div
            class="absolute bottom-6 sm:bottom-12 left-6 sm:left-12 text-2xl sm:text-2xl lg:text-3xl animate-float"
            style="animation-delay: -3s"
          >
            🥧
          </div>
          <div
            class="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 text-2xl sm:text-3xl lg:text-4xl animate-float"
            style="animation-delay: -4s"
          >
            🍪
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
