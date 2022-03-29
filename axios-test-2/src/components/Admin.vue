<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-8 mx-auto">
          <div class="box-list mb-4" v-for="d in mydata" :key="d._id">
            <ul class="list-group">
              <li class="list-group-item active" aria-current="true">{{ d._id }}</li>
              <li class="list-group-item">{{ d.EMAIL }}</li>
              <li class="list-group-item">{{ d.PASSWORD }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserService from "@/services/Users";

export default {
  name: "Admin",

  data() {
    return {
      mydata: [],
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
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scope></style>
