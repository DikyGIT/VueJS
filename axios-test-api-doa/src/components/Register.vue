<template>
  <div class="regis">
    <div class="regis-box" v-tilt>
      <h5>Sign un with your Email</h5>
      <p>Already have an Account? <a href="/">Sign in</a></p>
      <b-form @submit="onRegis" v-if="show" class="form-regis">
        <b-form-group id="input-group-1" label="Email address" label-for="input-1" class="label-form-regis">
          <b-form-input id="input-1" v-model="form.email" type="email" placeholder="Enter email" class="input-form-regis" required></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Your Password" label-for="input-2" class="label-form-regis">
          <b-form-input id="input-2" v-model="form.password" type="password" placeholder="Enter Password" class="input-form-regis" required></b-form-input>
        </b-form-group>

        <b-button @click="registration()" variant="primary" class="button-form-regis">Sign Up</b-button>
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
.regis {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: #161623;
  display: flex;
  justify-content: center;
  align-items: center;
}

.regis::before {
  position: absolute;
  content: "";
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background-image: linear-gradient(to bottom, #5900ff, #3313cd, #11159c, #00106c, #00033e);
  top: 50px;
  left: 200px;
  filter: blur(30px);
  z-index: 1;
}

.regis::after {
  position: absolute;
  content: "";
  width: 350px;
  height: 350px;
  border-radius: 50%;
  background-image: linear-gradient(to bottom, #d0ff00, #f99800, #d73542, #7c0057, #00033e);
  bottom: 50px;
  right: 200px;
  filter: blur(30px);
  z-index: 2;
}

.regis-box {
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

.regis-box h5 {
  text-align: left;
  color: rgba(255, 255, 255, 0.7);
  padding: 20px 0 0 20px;
  font-weight: bold;
  margin-bottom: 5px;
}

.regis-box p {
  text-align: left;
  color: rgba(255, 255, 255, 0.7);
  font-family: sans-serif;
  font-size: 12px;
  padding: 0 0 0 20px;
}

.regis-box p a {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  color: #d0ff00;
  font-weight: bold;
}

.regis-box p a:hover {
  text-decoration: none;
  color: #dd1951;
}

.regis-box .form-regis {
  margin-top: 20px;
  padding: 20px;
}

.regis-box .label-form-regis {
  text-align: left;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.5);
}

.regis-box .input-form-regis {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.regis-box .button-form-regis {
  margin-top: 10px;
  width: 100%;
  padding: 10px 0 10px 0;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  font-weight: bold;
  color: rgba(255, 255, 255, 0.7);
}

.regis-box .button-form-regis:hover {
  background-image: linear-gradient(to right bottom, #ffc500, #f66f35, #c02652, #6b0558, #00033e);
}
</style>
