<template>
  <div>
    <div class="login-page d-flex align-items-center">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-4 text-white text-left login-page-column">
            <h1 class="mb-4 login-text-title text-center">LOGIN</h1>
            <b-form @submit="onSubmit" v-if="show">
              <b-form-group id="input-group-1">
                <b-form-input id="input-1" v-model="form.email" type="email" placeholder="Enter Email" required></b-form-input>
              </b-form-group>

              <b-form-group id="input-group-2" class="mb-4">
                <b-form-input id="input-2" v-model="form.password" type="password" placeholder="Enter Password" required></b-form-input>
              </b-form-group>

              <b-button @click="login()" variant="primary" class="login-page-button mb-2">Login</b-button>
              <p class="text-muted text-center mt-3 mb-1 text-create">You Don't Have an Account?</p>
              <b-button variant="success" class="login-page-button" to="/register">Create An Account</b-button>
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
    onSubmit(event) {
      this.login();
      console.log(event);
    },

    login: async function () {
      try {
        const response = await AuthService.login(this.form);
        console.log(response);
        this.$router.push("/fetchdata");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.login-page {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-image: linear-gradient(to left top, #150159, #131066, #0f1e72, #092a7e, #00368a);
}
.login-page .login-text-title {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  color: #0000005b;
  border-bottom: 1px solid #00000011;
}
.login-page .login-page-column {
  border: 1px solid darkgray;
  padding: 20px;
  border-radius: 10px;
  background-color: white;
}

.login-page .login-page-button {
  width: 100%;
}
.login-page .text-create {
  padding: 0;
  margin: 0;
  font-size: 12px;
}
</style>
