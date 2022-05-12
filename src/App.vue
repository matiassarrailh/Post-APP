<template>
  <div id="app">
    <v-app-bar id="navigationBar">
      <v-row rows="6">
        <v-col cols="1"><h4>POST APP</h4></v-col>
        <v-col cols="1">
          <router-link to="/" style="text-decoration: none">Home</router-link>
        </v-col>
        <v-col cols="8"> </v-col>
        <v-col cols="1">
          <router-link to="/dashboard" style="text-decoration: none"
            >Dashboard</router-link
          >
        </v-col>
        <v-col cols="1">
          <router-link to="/allposts" style="text-decoration: none"
            >All Posts</router-link
          >
        </v-col>
      </v-row>
    </v-app-bar>
    <router-view />
  </div>
</template>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: lightgray;
}

#navigationBar {
  background-color: #69c99e;
}

.v-toolbar__content {
  justify-content: center;
}

v-app-bar {
  margin-bottom: 50px;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: black;
    }
  }
}
</style>
