<template>
  <div class="login">
    <div class="login-box" v-tilt>
      <h5>Sign in with your Email</h5>
      <p>You Don't have an Account? <a href="/register">Sign up</a></p>
      <b-form @submit="onLogin" v-if="show" class="form-login">
        <b-form-group id="input-group-1" label="Email address" label-for="input-1" class="label-form-login">
          <b-form-input id="input-1" v-model="form.email" type="email" placeholder="Enter email" class="input-form-login" required></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Your Password" label-for="input-2" class="label-form-login">
          <b-form-input id="input-2" v-model="form.password" type="password" placeholder="Enter Password" class="input-form-login" required></b-form-input>
        </b-form-group>

        <b-button @click="login()" variant="primary" class="button-form-login">Sign In</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
import AuthService from "../services/AuthenticationService";

export default {
  name: "Home",

  data() {
    return {
      form: {
        email: "",
        password: "",
      },

      show: true,
    };
  },

  mounted() {
    this.loadDom();
  },

  methods: {
    loadDom() {
      // * ini isi scriptnya?
    },

    onLogin(event) {
      this.login();
      console.log(event);
    },

    login: async function () {
      try {
        const response = await AuthService.login(this.form);
        console.log(response);
        this.$router.push("/api");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scope>
.login {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  position: relative;
  background-color: #161623;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login::before {
  position: absolute;
  content: "";
  width: 400px;
  height: 400px;
  background-image: linear-gradient(to bottom, #d0ff00, #f99800, #d73542, #7c0057, #00033e);
  border-radius: 50%;
  top: 50px;
  left: 200px;
  z-index: 1;
  filter: blur(30px);
}

.login::after {
  position: absolute;
  content: "";
  width: 350px;
  height: 350px;
  background-image: linear-gradient(to bottom, #5900ff, #3313cd, #11159c, #00106c, #00033e);
  border-radius: 50%;
  bottom: 50px;
  right: 200px;
  z-index: 2;
  filter: blur(30px);
}

.login-box {
  position: absolute;
  width: 350px;
  height: 400px;
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  /* border-top: 1px solid rgba(0, 0, 0, 0.3);
  border-left: 1px solid rgba(0, 0, 0, 0.3); */
  z-index: 3;
  border-radius: 10px;
}

.login-box h5 {
  text-align: left;
  color: rgba(255, 255, 255, 0.7);
  padding: 20px 0 0 20px;
  font-weight: bold;
  margin-bottom: 5px;
}

.login-box p {
  text-align: left;
  color: rgba(255, 255, 255, 0.7);
  font-family: sans-serif;
  font-size: 12px;
  padding: 0 0 0 20px;
}

.login-box p a {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  color: #dd1951;
  font-weight: bold;
}

.login-box p a:hover {
  text-decoration: none;
  color: #d0ff00;
}

.login-box .form-login {
  margin-top: 20px;
  padding: 20px;
}

.login-box .label-form-login {
  text-align: left;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.5);
}

.login-box .input-form-login {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.login-box .button-form-login {
  margin-top: 10px;
  width: 100%;
  padding: 10px 0 10px 0;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  font-weight: bold;
  color: rgba(255, 255, 255, 0.7);
}

.login-box .button-form-login:hover {
  background-image: linear-gradient(to right bottom, #ffc500, #f66f35, #c02652, #6b0558, #00033e);
}
</style>
