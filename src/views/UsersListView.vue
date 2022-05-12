<template>
  <div>
    <div v-for="users in usersWp" :key="users.id">
      {{ users.name }}
    </div>
  </div>
</template>

<script>
import PostService from "@/services/PostService";

export default {
  async created() {
    let res = await PostService.getUsers();
    console.log(res);
  },
};
</script>
