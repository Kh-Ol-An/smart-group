<template>
  <div class="films">
    <h1>This is an films page</h1>
    <SearchForm />
    <ul v-if="allDatas && allDatas.length">
      <li v-for="film of allDatas" :key="film.name">
        <h2>{{ film.title }}</h2>
      </li>
    </ul>
  </div>
</template>

<script>
import SearchForm from "@/components/SearchForm";

export default {
  name: "films",
  components: {
    SearchForm
  },
  props: ["allDatas"]
};
</script>
