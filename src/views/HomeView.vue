<template>
  <v-app id="inspire">
    <v-main>
      <v-container fluid style="margin-top: 150px">
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="#69c99e">
                <v-toolbar-title>Login form</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    v-model="username"
                    id="usernameLogin"
                    prepend-icon="mdi-account"
                    name="login"
                    label="Username"
                    type="text"
                  ></v-text-field>
                  <v-text-field
                    v-model="password"
                    id="passwordLogin"
                    prepend-icon="mdi-lock"
                    name="password"
                    label="Password"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="#69c99e" @click="login">Login</v-btn>
                <v-btn color="#69c99e" to="/register">Register</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import PostService from "@/services/PostService";

export default {
  name: "LoginForm",
  data() {
    return {
      users: [],
      username: "",
      password: "",
    };
  },
  methods: {
    async login() {
      this.users = await PostService.getUsers();
      console.log(this.users);
      document.getElementById("usernameLogin").value = "";
      document.getElementById("passwordLogin").value = "";
    },
  },
};
</script>

<style></style>
