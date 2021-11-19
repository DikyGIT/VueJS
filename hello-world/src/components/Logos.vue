<template>
  <div class="container">
    <div class="box1"></div>
    <div class="box2"></div>
    <div class="box3"></div>
    <div class="box4"></div>
    <div class="box5"></div>
    <div class="box6"></div>
    <div class="box7"></div>
    <div class="box8"></div>
    <div class="box9"></div>
    <div class="box10"></div>
    <div class="box11"></div>
    <div class="box12"></div>
  </div>
</template>

<script>
export default {
  name: 'Logos'
}
</script>

<style scoped>
  .container{
   /* background-color: #18dcff; */
   width: 700px;
   height: 500px;
   margin: auto;
   display: grid;
   grid-template-columns: repeat(12, 1fr);
   grid-template-rows: repeat(6, 1fr);
  }

  .box1{
    background-color: red;
    grid-column: 1/2;
    grid-row: 6/7;
  }

  .box1:hover, .box2:hover, .box3:hover, .box4:hover, .box5:hover, .box6:hover,
  .box7:hover, .box8:hover, .box9:hover, .box10:hover, .box11:hover, .box12:hover{
    grid-row: 7/1;
  }

  .box2{
    background-color: blue;
    grid-column: 2/3;
    grid-row: 5/7;
  }
  
  .box3{
    background-color: yellow;
    grid-column: 3/4;
    grid-row: 4/7;
  }

  .box4{
    background-color: green;
    grid-column: 4/5;
    grid-row: 3/7;
  }
  
  .box5{
    background-color: grey;
    grid-column: 5/6;
    grid-row: 2/7;
  }

  .box6{
    background-color: cornflowerblue;
    grid-column: 6/7;
    grid-row: 1/7;
  }
  
  .box7{
    background-color: cyan;
    grid-column: 7/8;
    grid-row: 1/7;
  }

  .box8{
    background-color: darkblue;
    grid-column: 8/9;
    grid-row: 2/7;
  }

  .box9{
    background-color: darkmagenta;
    grid-column: 9/10;
    grid-row: 3/7;
  }

  .box10{
    background-color: goldenrod;
    grid-column: 10/11;
    grid-row: 4/7;
  }

  .box11{
    background-color: indigo;
    grid-column: 11/12;
    grid-row: 5/7;
  }

  .box12{
    background-color: lightseagreen;
    grid-column: 12/13;
    grid-row: 6/7;
  }

</style>