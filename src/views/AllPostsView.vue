<template>
  <div>
    <div style="background-color: white; height: 75px">
      <div style="padding-top: 20px">
        <h1>Posts Showroom</h1>
      </div>
    </div>
    <v-row>
      <v-col cols="2"></v-col>
      <v-col cols="5">
        <div
          v-for="postEl in posts"
          :key="postEl.id"
          style="padding: 0 50px 0 50px; margin-top: 40px; margin-bottom: 10px"
        >
          <AllPosts style="background-color: lightgray" :post="postEl" /></div
      ></v-col>
      <v-col cols="3">
        <div
          style="
            width: auto;
            height: auto;
            background-color: white;
            margin-top: 40px;
          "
        >
          <v-card-title
            style="
              justify-content: center;
              font-size: 25px;
              font-weight: bold;
              background-color: #69c99e;
              color: black;
            "
            >Top Categories</v-card-title
          ><v-card class="mx-auto" max-width="500">
            <v-list>
              <v-list-item-group v-model="model">
                <div>
                  <v-list-item
                    style="justify-content: center"
                    @click="filterByCat(-1)"
                    ><h3>All Posts</h3></v-list-item
                  >
                </div>
                <v-list-item
                  v-for="(item, i) in items"
                  :key="i"
                  @click="filterByCat(i)"
                >
                  <v-list-item-icon>
                    <v-icon v-text="item.icon"></v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title v-text="item.text"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card>
        </div>
      </v-col>
      <v-col cols="2"></v-col>
    </v-row>
  </div>
</template>

<script>
import AllPosts from "@/components/AllPosts.vue";
import PostService from "@/services/PostService";

export default {
  components: {
    AllPosts,
  },
  data() {
    return {
      items: [
        {
          icon: "mdi-star",
          text: "Sports",
        },
        {
          icon: "mdi-star",
          text: "Movies",
        },
        {
          icon: "mdi-star",
          text: "Series",
        },
        {
          icon: "mdi-star",
          text: "Video Games",
        },
        {
          icon: "mdi-star",
          text: "Books",
        },
      ],
      model: null,
      posts: [],
      componentKey: 0,
    };
  },
  methods: {
    async filterByCat(i) {
      //THIS GETS POSTS FROM THE API BASED ON THE ID OF THE CATEGORY, THAT WE BIND TO THE "ID" OF THE BUTTON PRESSED
      let catId = 0;
      if (i == 0) {
        catId = 3;
        this.posts = await PostService.getPostsByCat(catId);
      }
      if (i == 1) {
        catId = 4;
        this.posts = await PostService.getPostsByCat(catId);
      }
      if (i == 2) {
        catId = 7;
        this.posts = await PostService.getPostsByCat(catId);
      }
      if (i == 3) {
        catId = 6;
        this.posts = await PostService.getPostsByCat(catId);
      }
      if (i == 4) {
        catId = 5;
        this.posts = await PostService.getPostsByCat(catId);
      }
      if (i == -1) {
        this.posts = await PostService.getPosts();
      }
    },
  },
  //SENDS A GET REQUESTS OF ALL POSTS FROM THE WORDPRESS REST API
  async created() {
    this.posts = await PostService.getPosts();
  },
};
</script>

<style></style>
