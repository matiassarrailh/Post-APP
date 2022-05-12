<template>
  <div class="about">
    <div style="background-color: white; height: 75px">
      <div style="padding-top: 20px">
        <h1>Post Details</h1>
      </div>
    </div>
    <v-row rows="12" style="margin-top: 50px; padding: 50px">
      <v-col>
        <v-row rows="6">
          <v-col>
            <v-card>
              <v-card-title
                style="
                  justify-content: center;
                  font-size: 30px;
                  font-weight: bold;
                "
                >{{ posts.title.rendered }}</v-card-title
              >
              <v-card-text
                v-html="posts.content.rendered"
                style="margin-top: 30px; text-align: start"
              >
                {{ posts.content.rendered }}
              </v-card-text>
              <v-card-text
                ><PostCardUsers :edit="editMode" :comments="comments" />
              </v-card-text>
              <v-textarea
                v-model="content"
                filled
                v-show="editMode"
              ></v-textarea>
              <v-card-actions>
                <v-btn @click="showComment">Add Comment</v-btn
                ><v-btn
                  :edit="editMode"
                  v-show="editMode"
                  @click="addComment(posts.id, content)"
                  >Save Comment</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import PostCardUsers from "@/components/PostCardUsers.vue";
import PostService from "@/services/PostService";

export default {
  props: { comments: Object },
  components: {
    PostCardUsers,
  },
  data() {
    return {
      editMode: false,
      posts: { title: "", content: "", id: -1 },
      commentsC: { id: 1 },
      content: "",
    };
  },
  methods: {
    showComment() {
      this.editMode = !this.editMode;
    },
    async addComment(id, content) {
      console.log(this.comments, content);
      let res = await PostService.createComment({
        post: id,
        content: content,
      });
      console.log(res);
    },
  },
  async created() {
    this.posts = await PostService.getPostById(this.$route.params.id);
  },
};
</script>
