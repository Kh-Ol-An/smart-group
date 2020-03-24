<template>
  <div class="people">
    <h1>People page</h1>
    <SearchForm />
    <ul v-if="allDatas && allDatas.length">
      <li v-for="person of allDatas" :key="person.name">
        <h2>{{ person.name }}</h2>
      </li>
    </ul>
  </div>
</template>

<script>
import SearchForm from "@/components/SearchForm";

export default {
  name: "people",
  components: {
    SearchForm
  },
  props: ["allDatas"]
};
</script>
