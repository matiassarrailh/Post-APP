import axios from "axios";

const baseUrl = "http://localhost:8000/wp-json/wp/v2/";

export default class PostService {
  //USERS SECTION
  static async getUsers() {
    let res = await axios.get(baseUrl + "users");
    return res.data;
  }
  static async createUser(user) {
    let res = await axios.post(baseUrl + "users", user, {
      auth: {
        username: "matiassarrailh",
        password: "Vc4k ItZt BwDG jAqd nJRs xgIM",
      },
    });
    return res.data;
  }

  //POSTS SECTION
  static async getPosts() {
    let res = await axios.get(baseUrl + "posts?per_page=99");
    return res.data;
  }

  static async createPost(post) {
    let res = await axios.post(baseUrl + "posts", post, {
      auth: {
        username: "matiassarrailh",
        password: "Vc4k ItZt BwDG jAqd nJRs xgIM",
      },
    });
    return res.data;
  }

  static async updatePost(post, id) {
    let res = await axios.post(baseUrl + "posts/" + id, post, {
      auth: {
        username: "matiassarrailh",
        password: "Vc4k ItZt BwDG jAqd nJRs xgIM",
      },
    });
    return res.data;
  }

  static async deletePost(id) {
    let res = await axios.delete(baseUrl + "posts/" + id, {
      auth: {
        username: "matiassarrailh",
        password: "Vc4k ItZt BwDG jAqd nJRs xgIM",
      },
    });
    return res.data;
  }

  static async getPostById(id) {
    let res = await axios.get(baseUrl + "posts/" + id);
    console.log(id);
    return res.data;
  }
  static async getPostsByCat(id) {
    let res = await axios.get(baseUrl + "posts?categories=" + id);
    return res.data;
  }
  //COMMENTS SECTION
  //POSTS SECTION
  static async getComments() {
    let res = await axios.get(baseUrl + "comments");
    return res.data;
  }

  static async createComment(post) {
    let res = await axios.post(baseUrl + "comments", post, {
      auth: {
        username: "matiassarrailh",
        password: "Vc4k ItZt BwDG jAqd nJRs xgIM",
      },
    });
    return res.data;
  }

  static async updateComment(comment, id) {
    let res = await axios.post(baseUrl + "comments/" + id, comment, {
      auth: {
        username: "matiassarrailh",
        password: "Vc4k ItZt BwDG jAqd nJRs xgIM",
      },
    });
    return res.data;
  }

  static async deleteComment(id) {
    let res = await axios.delete(baseUrl + "comments/" + id, {
      auth: {
        username: "matiassarrailh",
        password: "Vc4k ItZt BwDG jAqd nJRs xgIM",
      },
    });
    return res.data;
  }

  static async getCommentById(id) {
    let res = await axios.get(baseUrl + "comments/?post=" + id);
    return res.data;
  }
}
