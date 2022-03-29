<template>
  <div class="home">
    <KatalogHome />
  </div>
</template>

<script>
// @ is an alias to /src
import KatalogHome from "../components/KatalogHome.vue";

export default {
  name: "Home",
  components: {
    KatalogHome,
  },
};
</script>
