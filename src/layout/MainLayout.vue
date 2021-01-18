<template>
  <layout>
    <head>
      <link rel="stylesheet" href="@splidejs/splide/dist/css/themes/splide-default.min.css">

    </head>
    <container>
      <router-view />
    </container>
    <footer>
    </footer>
  </layout>


</template>

<script>
export default {
  name: "MainLayout"
};
</script>

<style scoped>

</style>