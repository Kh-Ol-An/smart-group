<template>
  <div class="page">
    <h1 class="page__title">Films page</h1>
    <SearchForm :routeName="routeName" />
    <ul v-if="allDatas && allDatas.length" class="list">
      <li v-for="film of allDatas" :key="film.name" class="list__item">
        <h2 class="list__item-title">{{ film.title }} {{ film.episode_id }}</h2>
        <p class="list__item-text">
          Director:
          <span class="list__item-data">{{ film.director }}</span>
        </p>
        <p class="list__item-text">
          Producer:
          <span class="list__item-data">{{ film.producer }}</span>
        </p>
        <p class="list__item-text">
          Release date:
          <span class="list__item-data">{{ film.director }}</span>
        </p>
        <p class="list__item-text">
          Opening crawl:
          <span class="list__item-data">{{ film.opening_crawl }}</span>
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
