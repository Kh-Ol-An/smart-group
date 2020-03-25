<template>
  <form @submit.prevent="handleSearch" class="form">
    <input type="text" v-model="search" placeholder="Searching..." class="form__input" />
    <button type="submit" class="form__button">Search</button>
  </form>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["routeName"],
  data() {
    return { search: "" };
  },
  methods: {
    ...mapActions(["getDatas"]),
    handleSearch() {
      return this.getDatas(this.routeName + "?search=" + this.search);
    }
  }
};
</script>

<style>
.form {
  display: flex;
  flex-flow: column;
  align-items: center;
  margin-bottom: 2em;
}

.form__input {
  font-size: 2rem;
  width: fit-content;
  padding: 0.5em;
  border-radius: 0.3em;
  margin-bottom: 0.5em;
}

.form__button {
  font-size: 1.8rem;
  border: 0.1em solid #2c3e50;
  border-radius: 0.3em;
  padding: 0.5em;
  font-weight: bolder;
  color: #2c3e50;
  background: #42b983;
  transition: all 200ms ease-in;
}

.form__button:hover {
  border-color: #42b983;
  color: #42b983;
  background: #2c3e50;
}

@media (min-width: 768px) {
  .form {
    flex-flow: row;
  }

  .form__input {
    margin: 0 0.5em 0 0;
  }
}
</style>
