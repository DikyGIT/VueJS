<template>
  <div class="pageMakanan">
    <h1 class="katalog-title">Katalog Makanan</h1>
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-lg-4 mb-3">
          <div class="makanan-box">
            <img src="../assets/campur/Banana 1.png" alt="" class="makanan-img" />
            <a href="/makanan/pisang" class="makanan-link" target="_blank">Lemper</a>
          </div>
        </div>
        <div class="col-md-6 col-lg-4 mb-3">
          <div class="makanan-box">
            <img src="" alt="" class="makanan-img" />
          </div>
        </div>
        <div class="col-md-6 col-lg-4 mb-3">
          <div class="makanan-box">
            <img src="" alt="" class="makanan-img" />
          </div>
        </div>
        <div class="col-md-6 col-lg-4 mb-3">
          <div class="makanan-box">
            <img src="" alt="" class="makanan-img" />
            <a href="" class="makanan-link"></a>
          </div>
        </div>
        <div class="col-md-6 col-lg-4 mb-3">
          <div class="makanan-box">
            <img src="" alt="" class="makanan-img" />
          </div>
        </div>
        <div class="col-md-6 col-lg-4 mb-3">
          <div class="makanan-box">
            <img src="" alt="" class="makanan-img" />
          </div>
        </div>
        <div class="col-md-6 col-lg-4 mb-3">
          <div class="makanan-box">
            <img src="" alt="" class="makanan-img" />
            <a href="" class="makanan-link"></a>
          </div>
        </div>
        <div class="col-md-6 col-lg-4 mb-3">
          <div class="makanan-box">
            <img src="" alt="" class="makanan-img" />
          </div>
        </div>
        <div class="col-md-6 col-lg-4 mb-3">
          <div class="makanan-box">
            <img src="" alt="" class="makanan-img" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Makanan",
};
</script>

<style scope>
.pageMakanan {
  background-color: #061029;
  min-height: 100vh;
  height: 100%;
}

.makanan-box {
  position: relative;
  height: 350px;
  background-color: #0f0f11;
  margin: 0 -5px 0 -5px;
  border-radius: 10px;
  border: 1px solid black;
  transform-style: preserve-3d;
}

.makanan-box .makanan-img {
  position: absolute;
  max-width: 200px;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 50px);
  transition: 0.4s;
}

.makanan-box:hover .makanan-img {
  transform: translate3d(-50%, -50%, 50px) scale(1.3);
}

.katalog-title {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 48px;
  color: white;
  padding: 40px 0 40px 0;
}

.makanan-link {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  font-family: Arial, Helvetica, sans-serif;
  font-size: 24px;
  color: white;
  text-decoration: none;
}

.makanan-link:hover {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.8);
}
</style>
