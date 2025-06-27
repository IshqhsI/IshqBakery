<template>
  <footer class="bg-amber-950 text-white py-6 sm:py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 text-center">
      <p class="text-sm sm:text-base">
        &copy; {{ year }} IshqCode. Made with ♡ for your sweet moments.
      </p>
    </div>
  </footer>
</template>

<script>
  export default {

    data(){
      return {
        year: new Date().getFullYear()
      }
    },

    mounted() {}

  }
</script>
