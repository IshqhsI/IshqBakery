<template>
  <section id="contact" class="py-12 sm:py-16 lg:py-20 bg-amber-900 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="text-center mb-12 sm:mb-16" data-aos="fade-up">
        <h2
          class="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
        >
          Hubungi Kami
        </h2>
        <div class="w-16 sm:w-24 h-1 bg-amber-400 mx-auto"></div>
      </div>

      <div class="grid lg:grid-cols-2 gap-8 lg:gap-12">
        <!-- Contact Info -->
        <div class="space-y-6" data-aos="fade-right">
          <h3
            class="font-playfair text-2xl sm:text-3xl font-semibold text-amber-300 mb-6 sm:mb-8"
          >
            Sweet Home Bakery
          </h3>

          <div class="space-y-3 sm:space-y-4 text-base sm:text-lg">
            <div class="flex items-start gap-3 sm:gap-4">
              <span class="text-xl sm:text-2xl mt-1">📍</span>
              <span class="flex-1">Jl. Mawar No. 123, Jakarta Selatan</span>
            </div>
            <div class="flex items-center gap-3 sm:gap-4">
              <span class="text-xl sm:text-2xl">📞</span>
              <span>+62 812-3456-7890</span>
            </div>
            <div class="flex items-center gap-3 sm:gap-4">
              <span class="text-xl sm:text-2xl">📧</span>
              <span class="break-all">info@sweethomebakery.com</span>
            </div>
            <div class="flex items-start gap-3 sm:gap-4">
              <span class="text-xl sm:text-2xl mt-1">🕒</span>
              <div>
                <div>Senin - Sabtu: 08.00 - 20.00</div>
                <div>Minggu: 09.00 - 18.00</div>
              </div>
            </div>
          </div>

          <div class="mt-6 sm:mt-8 p-3 sm:p-4 bg-amber-800/50 rounded-lg">
            <p class="text-amber-200 font-semibold text-sm sm:text-base">
              💝 Pre-order minimal 2 hari sebelumnya
            </p>
          </div>
        </div>

        <!-- Contact Form -->
        <div
          class="glass rounded-xl sm:rounded-2xl p-6 sm:p-8"
          data-aos="fade-left"
        >
          <h3 class="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
            Pesan Sekarang
          </h3>

          <form class="space-y-4 sm:space-y-6">
            <div>
              <input
                type="text"
                placeholder="Nama Lengkap"
                required
                class="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent text-sm sm:text-base"
              />
            </div>
            <div>
              <input
                type="tel"
                placeholder="Nomor WhatsApp"
                required
                class="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent text-sm sm:text-base"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                class="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent text-sm sm:text-base"
              />
            </div>
            <div>
              <textarea
                rows="4"
                placeholder="Detail pesanan dan tanggal yang dibutuhkan..."
                required
                class="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent resize-none text-sm sm:text-base"
              ></textarea>
            </div>
            <button
              type="submit"
              class="w-full bg-amber-500 text-white py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-amber-400 transition-colors duration-200 hover:-translate-y-0.5 transform"
            >
              Kirim Pesanan
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
