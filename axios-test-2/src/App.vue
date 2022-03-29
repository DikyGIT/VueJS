<template>
  <div id="app">
    <div>
      <b-navbar toggleable="lg" type="light" class="navigation-bar">
        <div class="container">
          <b-navbar-brand href="#">NavBar</b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
              <b-nav-item href="/">Home</b-nav-item>
              <b-nav-item href="/login">Login</b-nav-item>
              <b-nav-item href="/Register">Register</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </div>
      </b-navbar>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.navigation-bar {
  background-color: white;
}
</style>
