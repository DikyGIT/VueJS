<template>
  <div>
    <h1>Halaman Fetch Data</h1>
    <div v-for="d in mydata" :key="d._id" class="d-flex justify-content-center">
      <div class="box mb-3">
        <p>{{ d._id }}</p>
        <p>{{ d.EMAIL }}</p>
        <p>{{ d.PASSWORD }}</p>
        <b-button @click="deleteUsers(d._id)" variant="primary" class="login-page-button">delete</b-button>
        <b-button v-b-modal.modal-1 @click="getId(d._id)">Ubah Data</b-button>
      </div>
    </div>

    <b-modal id="modal-1" title="BootstrapVue">
      <h2>Change Data Form</h2>
      <b-form @submit="onSubmit" v-if="show">
        <b-form-group id="input-group-1">
          <b-form-input id="input-1" v-model="form.email" type="email" placeholder="Enter Email" required></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" class="mb-4">
          <b-form-input id="input-2" v-model="form.password" type="password" placeholder="Enter Password" required></b-form-input>
        </b-form-group>

        <b-button @click="updateUsers()" variant="primary" class="login-page-button mb-2" type="submit">Update</b-button>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import UserService from "@/services/Users";

export default {
  name: "FetchData",

  data() {
    return {
      selectedId: null,
      mydata: [],
      form: {
        email: "",
        password: "",
      },
      show: true,
    };
  },

  created() {
    this.getUsers();
  },

  methods: {
    getUsers: async function () {
      try {
        const response = await UserService.getUsers();
        this.mydata = response.data.data;
        console.log(response.data.data);
      } catch (error) {
        console.log(error);
      }
    },

    onSubmit(event) {
      this.updateUsers();
      console.log(event);
    },

    getId: function (id) {
      this.selectedId = id;
    },

    updateUsers: async function () {
      try {
        const response = await UserService.updateUsers(this.selectedId, this.form);
        this.getUsers();
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    },

    deleteUsers: async function (id) {
      try {
        const response = await UserService.deleteUsers(id);
        this.getUsers();
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.box {
  width: 700px;
  border-radius: 10px;
  padding: 15px 0 15px 0;
  background-color: #48dbfb;
}
</style>
