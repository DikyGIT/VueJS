<template>
  <div>
    <Navbar />

    <div class="container">
      <div class="row">
        <div class="col">
          <p class="sithLord">I is Sith</p>
          <button class="klik" @click="keelItWithFire">Kill the Sith DED!</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  name: "Home",
  components: {
    Navbar,
  },
  methods: {
    keelItWithFire() {
      document.querySelector(".sithLord").classList.toggle("active");
    },
  },
};
</script>

<style scoped>
.sithLord.active {
  display: none;
}
</style>
