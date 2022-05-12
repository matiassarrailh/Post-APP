<!--
THIS VIEW DISPLAYS A SINGLE COMMENT
USELESS COMPONENT, INTEGRATE TO PARENT TO SIMPLIFY THE APPLICATION
-->

<template>
  <v-card style="background-color: #efead8; text-align: start">
    <v-card-text v-html="post.content.rendered" style="margin-left: 20px">
      {{ post.content.rendered }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    post: Object,
  },
  data() {
    return {
      content: this.content,
    };
  },
};
</script>

<style>
.v-sheet.v-card:not(.v-sheet--outlined) {
  box-shadow: none;
  border-radius: 0;
}
</style>
