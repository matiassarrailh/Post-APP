<!--
  ALLPOSTS.VUE SHOWS THE TITLE AND DESCRIPTION OF A POST, AND REFERS YOU TO THE POSTVIEW 
  WHERE YOU CAN SEE THE DETAILS OF THE POST AND COMMENT THE POST.

  IN ORDER FOR THIS TO WORK THE ROUTER MUST SEND THE POST.ID AS PARAMETER TO DISPLAY THE INFORMATION OF THE POST CLICKED IN THE ALLPOSTSVIEW.
-->

<template>
  <router-link
    :to="{ name: 'post', params: { id: post.id } }"
    style="text-decoration: none"
  >
    <v-card style="margin-top: 10px">
      <div>
        <v-card-title
          style="justify-content: center; font-size: 25px; font-weight: bold"
          >{{ post.title.rendered }}</v-card-title
        >
        <v-card-text
          v-html="post.content.rendered"
          style="margin-top: 30px; text-align: start"
        >
          {{ post.content.rendered }}
        </v-card-text>
      </div>
    </v-card>
  </router-link>
</template>

<script>
export default {
  props: {
    post: Object,
  },
  data() {
    return {};
  },
  created() {},
};
</script>
