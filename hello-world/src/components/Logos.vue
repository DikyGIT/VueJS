<template>
  <div class="logos-wrapper">
    <h1 class="title-header">Find Best Logo</h1>
    <div class="item-logos">
      <img alt="NodeJS logo" src="../assets/Node JS.png" class="logo">
    </div>
    <div class="item-logos">
      <img alt="Laravel logo" src="../assets/Laravel.png" class="logo">
    </div>
    <div class="item-logos">
      <img alt="Phyton logo" src="../assets/Phyton.png" class="logo">
    </div>
    <div class="item-logos">
      <img alt="Angular logo" src="../assets/Angular.png" class="logo">
    </div>
    <div class="item-logos">
      <img alt="Git logo" src="../assets/Git.png" class="logo">
    </div>
    <div class="item-logos">
      <img alt="Bootstrap logo" src="../assets/Bootstrap.png" class="logo">
    </div>
    <div class="item-logos">
      <img alt="NodeJS logo" src="../assets/Node JS.png" class="logo">
    </div>
    <div class="item-logos">
      <img alt="Laravel logo" src="../assets/Laravel.png" class="logo">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Logos'
}
</script>

<style scoped>
.logos-wrapper{
    width: 70%;
    overflow: hidden;
    margin: auto;
    /* background-color: linen; */
}

.title-header{
  margin-bottom: 80px;
  text-align: left;
}

.item-logos{
  width: 150px;
  height: 150px;
  float: left;
  margin-right: 20px;
  margin-bottom: 20px;
}

.item-logos .logo{
  width: 150px;
  height: 150px;
}
</style>