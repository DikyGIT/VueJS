<template>
  <div>
    <h1>Lifecycle Hook</h1>
    <div v-if="products.length">
      <ul>
        <li v-for="item in products" v-bind:key="item.id">{{ item.title }} - {{ item.price }}</li>
      </ul>
    </div>
    <div v-else>
      <p>No Data Found!</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "LH",

  data() {
    return {
      products: [],
    };
  },

  // beforeMount() {
  //   console.log("Before Mount");
  // },
  // mounted() {
  //   console.log("Mounted");
  // },
  // beforeCreate() {
  //   console.log("Before Create");
  // },
  created() {
    this.products = [
      { id: 1, title: "Product 1", price: 3000 },
      { id: 2, title: "Product 2", price: 4000 },
      { id: 3, title: "Product 3", price: 5000 },
      { id: 4, title: "Product 4", price: 6000 },
      { id: 5, title: "Product 5", price: 7000 },
    ];
  },
};
</script>

<style scope></style>
