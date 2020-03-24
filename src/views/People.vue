<template>
  <div class="people">
    <h1>People page</h1>
    <ul v-if="posts && posts.length">
      <li v-for="post of posts" :key="post.name">
        <h2>{{ post.name }}</h2>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "people",
  data() {
    return {
      posts: null
    };
  },
  computed: {
    ...mapGetters(["PEOPLE"])
  },
  methods: {
    ...mapActions(["GET_PEOPLE"])
  },
  mounted() {
    this.GET_PEOPLE();
  }
};
</script>
