<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link home" href="#" @click="red">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">Disabled</a>
          </li>
        </ul>
      </div>
    </nav>

    <section class="header"></section>
    <section class="gallery"></section>
    <section class="contact"></section>
  </div>
</template>

<script>
export default {
  name: "Navbar",

  // created() {
  //   this.red();
  // },

  methods: {
    red() {
      document.querySelector(".header").classList.toggle("active");
    },
  },
};
</script>

<style scoped>
.header,
.gallery,
.contact {
  height: 100vh;
}

.header.active {
  background-color: red;
}
</style>
