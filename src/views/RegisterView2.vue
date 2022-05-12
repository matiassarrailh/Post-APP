<template>
  <v-app id="inspire">
    <v-main>
      <v-container fluid style="margin-top: 150px">
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="#69c99e">
                <v-toolbar-title>Registration form</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    id="username"
                    v-model="username"
                    prepend-icon="mdi-account"
                    name="login"
                    label="Username"
                    type="text"
                  ></v-text-field>
                  <v-text-field
                    id="firstName"
                    v-model="firstName"
                    prepend-icon="mdi-account"
                    name="firstName"
                    label="First Name"
                    type="text"
                  ></v-text-field>
                  <v-text-field
                    id="lastName"
                    v-model="lastName"
                    prepend-icon="mdi-account"
                    name="lastName"
                    label="Last Name"
                    type="text"
                  ></v-text-field>
                  <v-text-field
                    id="email"
                    v-model="email"
                    prepend-icon="mdi-email"
                    name="email"
                    label="Email"
                    type="text"
                  ></v-text-field>
                  <v-text-field
                    v-model="password"
                    id="password"
                    prepend-icon="mdi-lock"
                    name="password"
                    label="Password"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="#69c99e" @click="register">Register</v-btn>
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
      firstName: "",
      lastName: "",
      password: "",
      email: "",
    };
  },
  methods: {
    async register() {
      var tmp = {
        username: this.username,
        first_name: this.firstName,
        last_name: this.lastName,
        name: this.firstName,
        email: this.email,
        password: this.password,
      };
      let res = await PostService.createUser(tmp);
      console.log(res);
      document.getElementById("username").value = "";
      document.getElementById("firstName").value = "";
      document.getElementById("lastName").value = "";
      document.getElementById("email").value = "";
      document.getElementById("password").value = "";
    },
  },
};
</script>
