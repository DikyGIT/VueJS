<template>
  <div>
    <VueSlickCarousel v-bind="settings">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "SlickVue",

  data() {
    return {
      settings: {
        arrows: true,
        dots: true,
      },
    };
  },

  component: {
    VueSlickCarousel,
  },
};
</script>

<style></style>
