<template>
  <v-card>
    <v-card-title> Create your Post </v-card-title>
    <v-card-text>
      <v-text-field v-model="title" label="Title"></v-text-field>
      <v-textarea filled v-model="content" label="Content"></v-textarea>
    </v-card-text>
    <v-row align="center">
      <v-col data-app class="d-flex" cols="12" sm="6">
        <v-select :items="items" v-model="tmpItem" label="Solo field" solo>
        </v-select>
      </v-col>
    </v-row>
    <v-card-actions>
      <v-btn @click="submit">Submit</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import PostService from "@/services/PostService";

export default {
  data() {
    return {
      items: ["Movies", "Books", "Series", "Sports", "Video Games"],
      tmpItem: "",
      title: "",
      content: "",
    };
  },
  methods: {
    //REFERING TO SERVICES/POSTSERVICE.JS THE SUBMIT FUNCTION SENDS A POST REQUEST TO THE WORDPRESS REST API, TAKING THE INPUT OF THE CREATE YOUR POST FORM
    //TO GENERATE A TITLE, DESCRIPTION AND ASSOCIATE THE POST TO A CATEGORY.
    async submit() {
      let tmpItemId = 0;
      if (this.tmpItem == "Books") {
        tmpItemId = 5;
      } else if (this.tmpItem == "Movies") {
        tmpItemId = 4;
      } else if (this.tmpItem == "Series") {
        tmpItemId = 7;
      } else if (this.tmpItem == "Sports") {
        tmpItemId = 3;
      } else if (this.tmpItem == "Video Games") {
        tmpItemId = 6;
      }
      let res = await PostService.createPost({
        title: this.title,
        content: this.content,
        categories: tmpItemId,
        status: "publish",
      });
      console.log(res);
    },
  },
};
</script>
