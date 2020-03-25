<template>
  <div class="page">
    <h1 class="page__title">Starships page</h1>
    <SearchForm :routeName="routeName" />
    <ul v-if="allDatas && allDatas.length" class="list">
      <li v-for="starship of allDatas" :key="starship.name" class="list__item">
        <h2 class="list__item-title">{{ starship.name }}</h2>
        <p class="list__item-text">
          Model:
          <span class="list__item-data">{{ starship.model }}</span>
        </p>
        <p class="list__item-text">
          Manufacturer:
          <span class="list__item-data">{{ starship.manufacturer }}</span>
        </p>
        <p class="list__item-text">
          Starship class:
          <span class="list__item-data">{{ starship.starship_class }}</span>
        </p>
        <p v-if="starship.max_atmosphering_speed !== 'n/a'" class="list__item-text">
          Max atmosphering speed:
          <span class="list__item-data">{{ starship.max_atmosphering_speed }}</span>
        </p>
        <p class="list__item-text">
          Crew:
          <span class="list__item-data">{{ starship.crew }}</span>
        </p>
        <p class="list__item-text">
          Passengers:
          <span class="list__item-data">{{ starship.passengers }}</span>
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
