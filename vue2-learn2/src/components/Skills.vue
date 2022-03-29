<template>
  <div class="hello">
    <div class="holder">
      <form @submit.prevent="addSkill">
        <ValidationProvider rules="min:3" v-slot="{ errors }">
          <input type="text" placeholder="Enter your skill..." v-model="skill" name="skill" />
          <p>{{ errors[0] }}</p>
        </ValidationProvider>

        <input type="checkbox" id="checkbox" v-model="checked" />
      </form>

      <ul>
        <li v-for="(data, index) in skills" :key="index">
          {{ index }} - {{ data.skill }}

          <i class="fa fa-minus-circle" @click="remove(index)"></i>
        </li>
      </ul>
      <p v-if="skills.length >= 1">You Have More Than 1 Skills</p>
      <p v-else>You have less than or equal to 1 skill</p>

      <div :class="{ alert: showAlert, 'another-class': showClass }"></div>
      <br />
      <div :class="alertObject"></div>
      <br />
      <div :style="{ backgroundColor: bgColor, width: bgWidth, height: bgHeight }"></div>
    </div>
  </div>
</template>

<script>
import { ValidationProvider } from "vee-validate";

export default {
  name: "Skills",
  components: {
    ValidationProvider,
  },

  data() {
    return {
      checked: false,
      skill: "",
      skills: [{ skill: "Vue.js" }, { skill: "Frontend Developer" }],
      showAlert: true,
      showClass: true,
      alertObject: {
        alert: true,
      },
      bgColor: "red",
      bgWidth: "100%",
      bgHeight: "30px",
    };
  },
  methods: {
    addSkill() {
      this.skills.push({ skill: this.skill });
      this.skill = "";
      console.log("This checkbox value is: " + this.checked);
    },
    remove(id) {
      this.skills.splice(id, 1);
    },
  },
};
</script>

<style scope>
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";

.alert {
  background-color: yellow;
  width: 100%;
  height: 30px;
}
.another-class {
  border: 5px solid black;
}

i {
  cursor: pointer;
}
</style>
