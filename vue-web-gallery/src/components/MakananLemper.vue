<template>
  <div class="page-list-makanan">
    <h1 class="text-center text-white py-4 pt-5">Makanan Lemper</h1>

    <div class="container">
      <div class="row">
        <div class="col-md">
          <b-carousel id="carousel-1" v-model="slide" :interval="2000" controls indicators background="#ababab" style="text-shadow: 1px 1px 2px #333" @sliding-start="onSlideStart" @sliding-end="onSlideEnd" class="carousel-box">
            <!-- Text slides with image -->
            <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=51" class="img"></b-carousel-slide>

            <!-- Slides with custom text -->
            <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=52" class="img"> </b-carousel-slide>

            <!-- Slides with image only -->
            <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=53" class="img"></b-carousel-slide>

            <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54" class="img"></b-carousel-slide>

            <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=55" class="img"></b-carousel-slide>

            <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=56" class="img"></b-carousel-slide>

            <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=57" class="img"></b-carousel-slide>

            <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58" class="img"></b-carousel-slide>

            <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=59" class="img"></b-carousel-slide>
          </b-carousel>
          <p class="mt-4 text-white">Sudut Pandang: {{ slide + 1 }}</p>
          <p class="sliding-hide">Sliding: {{ sliding }}</p>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col">
          <b-button variant="danger" class="mx-3 btn-download">Download</b-button>
          <b-button variant="success" class="mx-3 btn-download">Download</b-button>
          <b-button variant="info" class="mx-3 btn-download">Download</b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MakananLemper",

  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
      console.log(slide);
    },
    onSlideEnd(slide) {
      this.sliding = false;
      console.log(slide);
    },
  },
};
</script>

<style scope>
.page-list-makanan {
  background-color: #061029;
  min-height: 100vh;
  height: 100%;
}

.carousel-box {
  margin: auto;
  max-width: 600px;
  object-fit: contain;
}

.carousel-box .img {
  object-fit: contain;
}

.sliding-hide {
  margin: 0;
  padding: 0;
  opacity: 0;
  display: none;
}

.btn-download {
  padding: 10px 50px 10px 50px;
  border-radius: 50px;
  object-fit: contain;
}
</style>
