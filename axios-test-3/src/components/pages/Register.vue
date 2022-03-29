<template>
  <div class="registrasi">
    <div class="registrasi-box">
      <h2 class="registrasi-title">REGISTER</h2>
      <b-form @submit.prevent="onRegis" v-if="show">
        <b-form-group
          class="registrasi-label"
          id="input-group-1"
          label="Email address"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            placeholder="Enter Email"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          class="registrasi-label"
          id="input-group-2"
          label="Your Password"
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            v-model="form.password"
            type="password"
            placeholder="Enter Password"
            required
          ></b-form-input>
        </b-form-group>

        <b-button
          type="submit"
          class="button-registrasi"
          @click="registration()"
          variant="primary"
          >Sign Up</b-button
        >
        <p class="login-label">
          Already have an Account? <a href="/">Sign In</a>
        </p>
      </b-form>
    </div>
  </div>
</template>

<script>
import Auth from "@/services/AuthenticationServices";

export default {
  name: "Register",

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
    onRegis(event) {
      event.preventDefault();
      this.registration();
      console.log(event);
    },

    registration: async function () {
      if (this.form.email && this.form.password) {
        try {
          const response = await Auth.registration(this.form);
          console.log(response);
          this.$router.push({ path: "/" });
          this.$toast.success("Selamat Akun anda berhasil dibuat", {
            type: "success",
            position: "top-right",
            duration: 3000,
            dismissible: false,
          });
        } catch (error) {
          console.log(error);
        }
      } else {
        this.$toast.error("Email dan Password belum terisi! ", {
          type: "error",
          position: "top-right",
          duration: 3000,
          dismissible: true,
        });
      }
    },
  },
};
</script>

<style scoped>
@import url("../../assets/css/style.css");
</style>
