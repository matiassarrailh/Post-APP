<template>
  <div>
    <div style="background-color: white; height: 75px">
      <div style="padding-top: 20px">
        <h1>Dashboard</h1>
      </div>
    </div>
    <v-row rows="12">
      <v-col cols="12">
        <AddPost style="margin-top: 10px" />
      </v-col>
    </v-row>
    <v-row rows="6">
      <v-col
        cols="12"
        v-for="postEl in posts"
        :key="postEl.id"
        style="padding: 0 50px 0 50px; margin-top: 10px"
      >
        <PostCard :post="postEl" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import PostCard from "@/components/PostCard.vue";
import PostService from "@/services/PostService";
import AddPost from "@/components/AddPost.vue";

export default {
  components: {
    PostCard,
    AddPost,
  },
  data() {
    return {
      posts: [],
      componentKey: 0,
    };
  },
  methods: {},
  async created() {
    this.posts = await PostService.getPosts();
  },
};
</script>
