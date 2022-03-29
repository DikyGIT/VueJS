<template>
  <div>
    <h1>Computed Properties</h1>
    <input type="text" v-model="cari" placeholder="Cari..." />
    <div v-if="cariData.length">
      <ul>
        <li v-for="item in cariData" v-bind:key="item.id">{{ item.title }} - {{ item.price }}</li>
      </ul>
    </div>
    <div v-else>
      <p>No Data Found!</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CP",

  data() {
    return {
      cari: "",
      products: [],
    };
  },

  created() {
    this.products = [
      { id: 1, title: "Product 1", price: 3000 },
      { id: 2, title: "Product 2", price: 4000 },
      { id: 3, title: "Product 3", price: 5000 },
      { id: 4, title: "Product 4", price: 6000 },
      { id: 5, title: "Product 5", price: 7000 },
    ];
  },

  computed: {
    cariData() {
      return this.products.filter((item) => {
        return item.title.match(this.cari);
      });
    },
  },
};
</script>

<style scope></style>
