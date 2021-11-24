<template>
  <div class="profile">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div class="d-flex align-items-center">
            <div class="flex-shrink-0">
              <img
                src="../assets/me.png"
                alt="Profile Logo"
                class="profile-logo"
              />
            </div>
            <div class="flex-grow-1 ms-3 text-start ps-3">
              <h3>{{ firstName }} {{ lastName }}</h3>
              <p>{{ penjelasan }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";

export default {
  name: "profile",
  data: function () {
    return {
      firstName: "Diky",
      lastName: "Prayoga",
      penjelasan:
        "This is some content from a media component. You can replace this with any content and adjust it as needed",
    };
  },
  components: {},
};
</script>

<style scoped>
.profile-logo {
  width: 100px;
  height: 100px;
  border-radius: 100%;
}
</style>