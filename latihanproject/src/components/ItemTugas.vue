<template>
  <div class="form-check mb-3">
    {{ array }}
    <input
      class="form-check-input"
      @click="change(tugasSaya.namaTugas)"
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
  data() {
    return {
      array: [],
    };
  },
  methods: {
    change: function (nama) {
      this.array.push(nama);
    },
  },
};
</script>

<style scoped>
</style>