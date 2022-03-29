<template>
  <div>
    <div class="register-page d-flex align-items-center">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-4 text-white text-left register-page-column">
            <h1 class="mb-4 login-text-title text-center register-text-title">REGISTER</h1>
            <b-form @submit="onRegis" v-if="show">
              <b-form-group id="input-group-1">
                <b-form-input id="input-1" v-model="form.email" type="email" placeholder="Enter Email" required></b-form-input>
              </b-form-group>

              <b-form-group id="input-group-2" class="mb-4">
                <b-form-input id="input-2" v-model="form.password" type="password" placeholder="Enter Password" required></b-form-input>
              </b-form-group>

              <b-button @click="registration()" variant="primary" class="register-page-button mb-2">Register</b-button>
              <p class="text-muted text-center mt-3 mb-1 text-create">You Have an Account?</p>
              <b-button variant="success" class="register-page-button" to="/login">Sign In</b-button>
            </b-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AuthService from "@/services/AuthenticationService";

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
      this.registration();
      console.log(event);
    },

    registration: async function () {
      try {
        const response = await AuthService.registration(this.form);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.register-page {
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-image: linear-gradient(to left top, #150159, #131066, #0f1e72, #092a7e, #00368a);
}
.register-page .register-text-title {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  color: #0000005b;
  border-bottom: 1px solid #00000011;
}
.register-page .register-page-column {
  border: 1px solid darkgray;
  padding: 20px;
  border-radius: 10px;
  background-color: white;
}

.register-page .register-page-button {
  width: 100%;
}
.register-page .text-create {
  padding: 0;
  margin: 0;
  font-size: 12px;
}
</style>
