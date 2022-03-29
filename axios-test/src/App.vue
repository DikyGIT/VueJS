<template>
  <div id="app">
    <div>
      <b-navbar toggleable="lg" type="dark" class="box-nav fixed-top">
        <div class="container">
          <b-navbar-brand href="/">LOREMIPSUM</b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
              <b-nav-item href="/" class="nav-text active">Home</b-nav-item>
              <b-nav-item href="/login" target="__blank" class="nav-text">Login</b-nav-item>
              <b-nav-item href="/register" target="__blank" class="nav-text">Register</b-nav-item>
              <b-nav-item href="/fetchdata" target="__blank" class="nav-text">FetchData</b-nav-item>
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
  color: #2c3e50;
}
.box-nav {
  background: transparent;
}
.nav-text {
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 16px;
  color: white;
  margin-left: 25px;
}
</style>
