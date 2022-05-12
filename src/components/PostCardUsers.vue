<template>
  <v-card>
    <!--COMMENTS SECTION-->
    <v-row rows="12">
      <v-col cols="12" v-for="commentEl in comments" :key="commentEl.id">
        <CommentCard style="border-radius: 0" :post="commentEl" />
        <v-btn @click="deleteComments(commentEl.id)">Delete</v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import PostService from "@/services/PostService";
import CommentCard from "@/components/CommentCard";

export default {
  components: {
    CommentCard,
  },
  props: {
    content: String,
    post: Object,
  },
  data() {
    return {
      comments: [],
      editMode: false,
    };
  },
  methods: {
    //DELETE COMMENTS FUNCTION, SENDS A DELETE REQUEST TO THE WORDPRESS REST API
    async deleteComments(id) {
      console.log(this.comments, id);
      let res = await PostService.deleteComment(id);
      console.log(res);
    },
  },
  //GETS THE COMMENTS OF A POST BY THE ID OF THE POST, SENDING A GET REQUEST TO THE WORDPRESS REST API
  async created() {
    let id = this.$route.params.id;
    this.comments = await PostService.getCommentById(id);
  },
};
</script>
