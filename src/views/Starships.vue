<template>
  <div class="starships">
    <h1>Starships from Star Wars film</h1>
    <SearchForm />
    <ul v-if="allDatas && allDatas.length">
      <li v-for="film of allDatas" :key="film.name">
        <h2>{{ film.model }}</h2>
      </li>
    </ul>
  </div>
</template>

<script>
import SearchForm from "@/components/SearchForm";

export default {
  name: "starships",
  components: {
    SearchForm
  },
  props: ["allDatas"]
};
</script>
