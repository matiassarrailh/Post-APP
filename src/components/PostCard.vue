<template>
  <v-card>
    <v-card-title>{{ post.title.rendered }}</v-card-title>
    <v-card-text v-html="post.content.rendered">
      {{ post.content.rendered }}
    </v-card-text>
    <v-card-text>
      <v-text-field v-model="title" v-show="editMode"></v-text-field>
      <v-textarea v-model="content" filled v-show="editMode"></v-textarea>
    </v-card-text>
    <v-card-actions>
      <v-btn @click="deletePost(post.id)">Delete</v-btn>
      <v-btn @click="editPost">Edit</v-btn>
      <v-btn
        :edit="editMode"
        v-show="editMode"
        @click="updatePost(post, post.id)"
        >Save</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
import PostService from "@/services/PostService";

export default {
  props: {
    post: Object,
  },
  data() {
    return {
      editMode: false,
      title: this.title,
      content: this.content,
    };
  },
  methods: {
    //SENDS A DELETE REQUEST WITH THE POST ID AS PARAMETER TO THE WORDPRESS REST API
    async deletePost(id) {
      let res = await PostService.deletePost(id);
      console.log(res);
    },
    //TOGGLES THE MODE OF THE EDITMODE PROPERTY, IF ITS TRUE IT WILL SHOW A TEXTAREA TO INPUT THE CONTENT OF A COMMENT AND A SAVE BUTTON
    //IF ITS FALSE IT WILL HIDE BOTH THE TEXTAREA AND THE SAVE BUTTON
    editPost() {
      this.editMode = !this.editMode;
    },
    //SENDS A POST REQUEST TO THE WORDPRESS REST API, WITH THE POST ID AND THE NEW POST'S TITLE AND DESCRIPTION, IN ORDER TO UPDATE IT. USED TO EDIT POSTS
    async updatePost(post, id) {
      var tmp = {
        title: this.title,
        content: this.content,
      };
      let res = await PostService.updatePost(tmp, id);
      console.log(res);
      this.editMode = false;
    },
  },
  created() {},
};
</script>
