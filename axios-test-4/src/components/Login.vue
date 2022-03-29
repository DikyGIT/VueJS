<template>
  <div class="login">
    <div class="login-box">
      <h2 class="login-title">LOGIN</h2>
      <!-- <div v-if="alert.message" :class="`alert ${alert.type}`">{{ alert.message }}</div> -->
      <b-form @submit="onLogin" v-if="show">
        <b-form-group class="login-label" id="input-group-1" label="Email address" label-for="input-1">
          <b-form-input id="input-1" v-model="form.email" type="email" placeholder="Enter Email" required></b-form-input>
        </b-form-group>

        <b-form-group class="login-label" id="input-group-2" label="Your Password" label-for="input-2">
          <b-form-input id="input-2" v-model="form.password" type="password" placeholder="Enter Password" required></b-form-input>
        </b-form-group>

        <b-button class="button-login" @click="login()" variant="primary">Sign In</b-button>
        <p class="registrasi-label">You don't have an account? <a href="/register">Sign Up</a></p>
      </b-form>
    </div>
  </div>
</template>

<script>
import Auth from "@/services/AuthenticationServices";

export default {
  name: "Login",

  data() {
    return {
      form: {
        email: "",
        password: "",
      },

      show: true,
    };
  },
  methods: {
    onLogin(event) {
      event.preventDefault();
      this.login();
      console.log(event);
    },

    login: async function () {
      try {
        const response = await Auth.login(this.form);
        console.log(response);
        this.$router.push("/databerita");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
@import url("../assets/css/style.css");
</style>
