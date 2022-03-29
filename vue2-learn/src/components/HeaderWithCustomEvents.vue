<template>
  <div>
    <h1>Halaman Header</h1>
    <h2>{{ text }}</h2>
    <button @click="changeText">Ubah Text</button>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: ["text"],

  data() {
    return {
      newText: "ini adalah text dari header.vue",
    };
  },

  methods: {
    changeText() {
      this.$emit("changeTitle", this.newText);
    },
  },
  emits: ["changeTitle"],
};
</script>

<style scope></style>
