<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark">
      <div class="container">
        <!-- <b-navbar-brand href="#">MYLOGO</b-navbar-brand> -->

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="mx-auto navigation-link">
            <b-nav-item href="/" class="navigation-text-link text-white">HOME</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}

.navbar {
  background-color: #0f0f11;
  border-bottom: 1px solid black;
}

.navigation-text-link {
  font-family: Arial, Helvetica, sans-serif;
  color: white;
  font-size: 18px;
}
</style>
