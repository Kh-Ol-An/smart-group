<template>
  <div class="page">
    <h1 class="page__title">People page</h1>
    <SearchForm :routeName="routeName" />
    <ul v-if="allDatas && allDatas.length" class="list">
      <li v-for="person of allDatas" :key="person.name" class="list__item">
        <h2 class="list__item-title">{{ person.name }}</h2>
        <p class="list__item-text">
          Height:
          <span class="list__item-data">{{ person.height }}</span>
        </p>
        <p class="list__item-text">
          Mass:
          <span class="list__item-data">{{ person.mass }}</span>
        </p>
        <p class="list__item-text">
          Hair color:
          <span class="list__item-data">{{ person.hair_color }}</span>
        </p>
        <p class="list__item-text">
          Skin color:
          <span class="list__item-data">{{ person.skin_color }}</span>
        </p>
        <p class="list__item-text">
          Eye color:
          <span class="list__item-data">{{ person.eye_color }}</span>
        </p>
        <p class="list__item-text">
          Birth year:
          <span class="list__item-data">{{ person.birth_year }}</span>
        </p>
        <p class="list__item-text">
          Gender:
          <span class="list__item-data">{{ person.gender }}</span>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import SearchForm from "@/components/SearchForm";

export default {
  components: {
    SearchForm
  },
  props: ["allDatas", "routeName"]
};
</script>

<style lang="css">
@import "../styles/page.css";
</style>
