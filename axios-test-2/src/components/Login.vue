<template>
  <div class="login">
    <div class="circle"></div>
    <div class="circle2"></div>
    <div class="login-box">
      <h5>Sign In with your Email!</h5>
      <p>Don't have an Account? <a href="/register">Sign Up</a></p>
      <b-form @submit="onSubmit" v-if="show" class="form-login">
        <b-form-group id="email" label="Your Email" label-for="email" class="label-form">
          <b-form-input id="email" v-model="form.email" type="email" placeholder="Enter email" required></b-form-input>
        </b-form-group>

        <b-form-group id="password" label="Your Password" label-for="password" class="label-form">
          <b-form-input id="password" v-model="form.password" type="password" placeholder="Enter Password" required></b-form-input>
        </b-form-group>

        <b-button @click="login()" class="button-login">Sign In</b-button>
      </b-form>
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
        this.$router.push("/admin");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.login {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 90vh;
  background-color: #f1faee;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-box {
  position: absolute;
  width: 350px;
  height: 400px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 40px;
}

.login-box h5,
p {
  text-align: left;
  color: rgba(0, 0, 0, 0.6);
}

.login-box h5 {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 2px;
}

.login-box p {
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-size: 12px;
}

.form-login {
  margin-top: 30px;
}

.form-login .label-form {
  text-align: left;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.2);
}

.button-login {
  width: 100%;
  background-color: #e63946;
  border: 0;
  margin-top: 10px;
  padding: 10px 0 10px 0;
}

/* style background */
.circle {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 400px;
  height: 400px;
  background-color: #e6394780;
  border-radius: 50%;
  box-shadow: 0 0 50px #e6394780;
  filter: blur(50px);
}

.circle2 {
  position: absolute;
  top: 0;
  right: 0;
  width: 400px;
  height: 400px;
  background-color: #e6394780;
  border-radius: 50%;
  box-shadow: 0 0 50px #e6394780;
  filter: blur(50px);
}
</style>
