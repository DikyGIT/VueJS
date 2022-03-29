<template>
  <div class="home">
    <h1 class="katalog-title">Katalog Gallery</h1>
    <div class="container">
      <div class="row">
        <div class="col-md col-lg-6 px-5">
          <div class="category-box">
            <img src="../assets/campur/Sofa 2.png" alt="" class="home-img-category" />
            <a href="/makanan" class="katalog-link" target="_blank">Makanan</a>
          </div>
        </div>
        <div class="col-md col-lg-6 px-5">
          <div class="category-box">
            <img src="../assets/campur/Flower Bush 1.png" alt="" class="home-img-category" />
            <a href="/militer" class="katalog-link" target="_blank">Militer</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "KatalogHome",
};
</script>

<style scoped>
.home {
  background-color: #061029;
  min-height: 100vh;
  height: 100%;
}

.katalog-title {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 48px;
  padding: 40px 0 30px 0;
  color: white;
}

.category-box {
  position: relative;
  height: 350px;
  background-color: #0f0f11;
  border-radius: 10px;
  border: 1px solid black;
  transform-style: preserve-3d;
}

.category-box .home-img-category {
  position: absolute;
  max-width: 200px;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 100px);
  transition: 0.4s;
}

.category-box:hover .home-img-category {
  transform: translate3d(-50%, -50%, 100px) scale(1.2);
}

.katalog-link {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: Arial, Helvetica, sans-serif;
  font-size: 24px;
  color: white;
  text-decoration: none;
}

.katalog-link:hover {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
}
</style>
