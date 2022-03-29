<template>
  <div>
    <!-- Jumbotron -->
    <div class="jumbotron jumbotron-fluid box-jumbotron">
      <div class="container">
        <div class="row box-jumbotron-row-one d-flex justify-content-between">
          <div class="col-lg box-jumbotron-column-one text-left">
            <h1 class="display-4 mb-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
            <p class="lead mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem cum amet dicta earum ad ex minus maiores reiciendis, exercitationem natus?</p>
            <button type="button" class="btn btn-success btn-lg mr-2">Success</button>
            <button type="button" class="btn btn-danger btn-lg">Danger</button>
          </div>
          <div class="col-lg box-jumbotron-column-two">
            <div class="cube">
              <div class="top"></div>
              <div>
                <span style="--i: 0"></span>
                <span style="--i: 1"></span>
                <span style="--i: 2"></span>
                <span style="--i: 3"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Jumbotron -->
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.box-jumbotron {
  min-height: 100vh;
  height: 100%;
  padding: 100px 0 0 0;
  margin: 0;
  background-color: #050505;
  position: relative;
}
.box-jumbotron-row-one {
  margin-top: 50px;
}
.box-jumbotron-column-one,
.box-jumbotron-column-two {
  margin: 0;
  padding: 0;
}
.box-jumbotron .box-jumbotron-column-one .display-4 {
  line-height: 70px;
  font-weight: bold;
  color: wheat;
}

.box-jumbotron .box-jumbotron-column-one .lead {
  line-height: 28px;
  color: wheat;
}

.box-jumbotron .box-jumbotron-column-two {
  position: relative;
}

/* Animasi Box */
.cube {
  position: absolute;
  top: 10%;
  left: 30%;
  width: 250px;
  height: 250px;
  transform-style: preserve-3d;
  transform: rotateX(-30deg);
  animation: animate 4s linear infinite;
}
@keyframes animate {
  0% {
    transform: rotateX(-30deg) rotateY(0deg);
  }
  100% {
    transform: rotateX(-30deg) rotateY(360deg);
  }
}

.cube div {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
}
.cube div span {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background: linear-gradient(#151515, #00ec00); */
  transform: rotateY(calc(90deg * var(--i))) translateZ(124px);
  animation: animateColor 5s linear infinite;
}

@keyframes animateColor {
  0% {
    background: linear-gradient(#151515, #00ec00);
  }
  100% {
    background: linear-gradient(#151515, #c70000);
  }
}

.top {
  position: absolute;
  top: 0;
  left: 0;
  width: 250px;
  height: 250px;
  background: #222;
  transform: rotateX(90deg) translateZ(124px);
}
.top::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 250px;
  height: 250px;
  /* background: #0f0; */
  transform: translateZ(-320px);
  filter: blur(20px);
  /* box-shadow: 0 0 120px rgba(0, 255, 0, 0.2), 0 0 200px rgba(0, 255, 0, 0.4), 0 0 300px rgba(0, 255, 0, 0.6), 0 0 400px rgba(0, 255, 0, 0.8), 0 0 500px rgba(0, 255, 0, 1); */
  animation: animateColorBoxShadow 5s linear infinite;
}

@keyframes animateColorBoxShadow {
  0% {
    background: #0f0;
    box-shadow: 0 0 120px rgba(0, 255, 0, 0.2), 0 0 200px rgba(0, 255, 0, 0.4), 0 0 300px rgba(0, 255, 0, 0.6), 0 0 400px rgba(0, 255, 0, 0.8), 0 0 500px rgba(0, 255, 0, 1);
  }
  50% {
    background: #c70000;
    box-shadow: 0 0 120px rgba(255, 0, 0, 0.2), 0 0 200px rgba(255, 0, 0, 0.4), 0 0 300px rgba(255, 0, 0, 0.6), 0 0 400px rgba(255, 0, 0, 0.8), 0 0 500px rgb(255, 0, 0, 1);
  }
  100% {
    background: #0f0;
    box-shadow: 0 0 120px rgba(0, 255, 0, 0.2), 0 0 200px rgba(0, 255, 0, 0.4), 0 0 300px rgba(0, 255, 0, 0.6), 0 0 400px rgba(0, 255, 0, 0.8), 0 0 500px rgba(0, 255, 0, 1);
  }
}

/* Animasi Box */
</style>
