<template>
  <div class="container">
    <div class="nav">
      <router-link to="/people" class="nav__link">People</router-link>
      <router-link to="/films" class="nav__link">Films</router-link>
      <router-link to="/starships" class="nav__link">Starships</router-link>
    </div>
    <router-view :allDatas="allDatas" :routeName="routeName" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return { routeName: null };
  },
  watch: {
    $route(newRoute) {
      this.routeName = newRoute.name + "/";
      this.getDatas(newRoute.name + "/");
    },
    routeName: function(newRouteName) {
      return (this.routeName = newRouteName);
    }
  },
  computed: {
    ...mapGetters(["allDatas"])
  },
  methods: {
    ...mapActions(["getDatas"])
  }
};
</script>

<style lang="css">
@import "./styles/normalize.css";
@import "./styles/reset.css";
@import "./styles/base.css";

.container {
  width: 100%;
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: auto;
}

.nav {
  display: flex;
}

.nav__link {
  font-size: 2rem;
  position: relative;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em 0;
  font-weight: bold;
  color: #2c3e50;
  background: #42b983;
}

.nav__link:not(:last-child):after {
  width: 2px;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  display: inline-block;
  content: "";
  background: #2c3e50;
}

.nav__link.router-link-exact-active {
  color: #42b983;
  background: #2c3e50;
}

@media (min-width: 768px) {
  .nav__link {
    font-size: 3rem;
  }
}
</style>
