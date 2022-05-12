<template>
  <v-app id="inspire">
    <v-main style="margin-top: 100px">
      <v-container>
        <v-layout align-center justify-center>
          <v-flex>
            <v-card class="elevation-12">
              <v-toolbar dark color="#69c99e">
                <v-toolbar-title>Age Check</v-toolbar-title>
              </v-toolbar>
              <v-card-text> </v-card-text>
              <v-card-actions>
                <v-card-title>ARE YOU AT LEAST 13 YEARS OLD?</v-card-title>
                <v-spacer></v-spacer>
                <v-btn color="#69c99e" to="/register2" style="width: 100px"
                  >YES</v-btn
                >
                <v-btn color="#69c99e" to="/goodbye" style="width: 100px"
                  >NO</v-btn
                >
              </v-card-actions>
            </v-card></v-flex
          >
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>
