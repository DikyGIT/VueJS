<template>
  <div>
    <div class="thumb-example">
      <!-- swiper1 -->
      <swiper
        class="swiper gallery-top"
        :options="swiperOptionTop"
        ref="swiperTop"
      >
        <swiper-slide class="swiper-slide slide-1"></swiper-slide>
        <swiper-slide class="swiper-slide slide-2"></swiper-slide>
        <swiper-slide class="swiper-slide slide-3"></swiper-slide>
        <swiper-slide class="swiper-slide slide-4"></swiper-slide>
        <swiper-slide class="swiper-slide slide-5"></swiper-slide>
        <div
          class="swiper-button-next swiper-button-white"
          slot="button-next"
        ></div>
        <div
          class="swiper-button-prev swiper-button-white"
          slot="button-prev"
        ></div>
      </swiper>
      <!-- swiper2 Thumbs -->
      <swiper
        class="swiper gallery-thumbs"
        :options="swiperOptionThumbs"
        ref="swiperThumbs"
      >
        <swiper-slide class="swiper-slide slide-1"></swiper-slide>
        <swiper-slide class="swiper-slide slide-2"></swiper-slide>
        <swiper-slide class="swiper-slide slide-3"></swiper-slide>
        <swiper-slide class="swiper-slide slide-4"></swiper-slide>
        <swiper-slide class="swiper-slide slide-5"></swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  title: "Thumbs gallery with Two-way control",
  name: "SwiperVersTwo",
  data() {
    return {
      swiperOptionTop: {
        loop: true,
        loopedSlides: 5, // looped slides should be the same
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      swiperOptionThumbs: {
        loop: true,
        loopedSlides: 5, // looped slides should be the same
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: "auto",
        touchRatio: 0.2,
        slideToClickedSlide: true,
      },
    };
  },
  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.$swiper;
      const swiperThumbs = this.$refs.swiperThumbs.$swiper;
      swiperTop.controller.control = swiperThumbs;
      swiperThumbs.controller.control = swiperTop;
    });
  },
};
</script>

<style scoped>
.thumb-example {
  height: 500px;
  background-color: rgb(153, 149, 149);
}

.swiper .swiper-slide.slide-1 {
  background-image: url("https://source.unsplash.com/random/1");
  background-size: cover;
  background-position: center;
}
.swiper .swiper-slide.slide-2 {
  background-image: url("https://source.unsplash.com/random/2");
  background-size: cover;
  background-position: center;
}
.swiper .swiper-slide.slide-3 {
  background-image: url("https://source.unsplash.com/random/3");
  background-size: cover;
  background-position: center;
}
.swiper .swiper-slide.slide-4 {
  background-image: url("https://source.unsplash.com/random/4");
  background-size: cover;
  background-position: center;
}
.swiper .swiper-slide.slide-5 {
  background-image: url("https://source.unsplash.com/random/5");
  background-size: cover;
  background-position: center;
}

.swiper.gallery-top {
  height: 80%;
  width: 100%;
}

.swiper.gallery-thumbs {
  height: 20%;
  box-sizing: border-box;
  padding: 0;
}

.swiper.gallery-thumbs .swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.4;
}

.swiper.gallery-thumbs .swiper-slide-active {
  opacity: 1;
}
</style>