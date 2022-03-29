<template>
  <div>
    <swiper class="swiper" ref="mySwiper" :options="swiperOptions">
      <swiper-slide class="swiper-slide">Slide 1</swiper-slide>
      <swiper-slide class="swiper-slide">Slide 2</swiper-slide>
      <swiper-slide class="swiper-slide">Slide 3</swiper-slide>
      <swiper-slide class="swiper-slide">Slide 4</swiper-slide>
      <swiper-slide class="swiper-slide">Slide 5</swiper-slide>
      <swiper-slide class="swiper-slide">Slide 6</swiper-slide>
      <swiper-slide class="swiper-slide">Slide 7</swiper-slide>
      <swiper-slide class="swiper-slide">Slide 8</swiper-slide>
      <swiper-slide class="swiper-slide">Slide 9</swiper-slide>
      <swiper-slide class="swiper-slide">Slide 10</swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  components: {},
  data() {
    return {
      swiperOptions: {
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        // Some Swiper option/callback...
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  mounted() {
    console.log("Current Swiper instance object", this.swiper);
    this.swiper.slideTo(3, 1000, false);
  },
};
</script>

<style scoped>
.swiper {
  width: 100%;
  height: 300px;
}

.swiper .swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: bold;
  color: #333;
  background-color: rgb(136, 136, 136);
}
</style>
