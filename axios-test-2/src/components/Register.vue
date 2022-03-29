<template>
  <div class="register">
    <div class="circle"></div>
    <div class="circle2"></div>
    <div class="register-box">
      <h5>Sign Up with your Email!</h5>
      <p>Already have an Account? <a href="/login">Sign In</a></p>
      <b-form @submit="onRegis" v-if="show" class="form-register">
        <b-form-group id="email" label="Your Email" label-for="email" class="label-form">
          <b-form-input id="email" v-model="form.email" type="email" placeholder="Enter email" required></b-form-input>
        </b-form-group>

        <b-form-group id="password" label="Your Password" label-for="password" class="label-form">
          <b-form-input id="password" v-model="form.password" type="password" placeholder="Enter Password" required></b-form-input>
        </b-form-group>

        <b-button @click="registration()" class="button-register">Sign Up</b-button>
      </b-form>
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

<style scope>
.register {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 90vh;
  background-color: #f1faee;
  display: flex;
  justify-content: center;
  align-items: center;
}

.register-box {
  width: 350px;
  height: 400px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 40px;
}

.register-box h5,
p {
  text-align: left;
}

.register-box h5 {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  color: rgba(0, 0, 0, 0.6);
  margin-bottom: 3px;
  font-weight: bold;
}

.register-box p {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.6);
}

.register-box .form-register {
  margin-top: 30px;
}

.register-box .label-form {
  text-align: left;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.2);
}

.register-box .form-register .button-register {
  width: 100%;
  padding: 10px 0 10px 0;
  background-color: #003566;
  margin-top: 10px;
  border: 0;
}

/* style background */
.circle {
  position: absolute;
  width: 400px;
  height: 400px;
  bottom: 0;
  left: 0;
  background-color: #003566;
  border-radius: 50%;
  box-shadow: 0 0 100px #003566d7;
  filter: blur(50px);
}

.circle2 {
  position: absolute;
  width: 400px;
  height: 400px;
  top: 0;
  right: 0;
  background-color: #003566;
  border-radius: 50%;
  box-shadow: 0 0 100px #003566d7;
  filter: blur(50px);
}
</style>
