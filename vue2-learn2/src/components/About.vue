<template>
  <div>
    <h1>Halaman About</h1>
    <h1>Hello {{ their_name }}, Thank You for coming on my website</h1>
  </div>
</template>

<script>
export default {
  name: "About",

  data() {
    return {
      their_name: this.$route.params.name,
    };
  },
};
</script>

<style scope></style>
