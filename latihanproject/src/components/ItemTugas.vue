<template>
  <div class="form-check mb-3">
    <input
      class="form-check-input"
      v-on:click="change"
      type="checkbox"
      value=""
      id="flexCheckDefault"
    />
    <label
      class="form-check-label item"
      v-bind:class="{ 'item-selected': tugasSaya.isDone }"
      for="flexCheckDefault"
    >
      {{ tugasSaya.namaTugas }}
    </label>
  </div>
</template>

<script>
export default {
  name: "ItemTugas",
  props: ["tugasSaya"],
};
</script>

<style scoped>
</style>