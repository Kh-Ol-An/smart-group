<template>
  <form @submit.prevent="handleSearch" class="form">
    <input type="text" v-model="search" placeholder="Searching..." />
    <button type="submit">Search</button>
  </form>
</template>

<script>
export default {
  name: "serach",
  data() {
    return { search: "" };
  },
  methods: {
    handleSearch() {}
  }
};
</script>

<style>
.form {
  margin: 0;
}
</style>
