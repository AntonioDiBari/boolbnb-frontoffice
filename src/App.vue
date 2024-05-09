<script>
import { api, store } from "./store";

import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
// import ApartmentList from "./components/ApartmentList.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  data() {
    return {};
  },

  props: {},
  methods: {},
  components: { AppHeader, AppMain, AppFooter },
};
</script>

<template>
  <app-header />
  <div class="page-container">
    <app-main />
    <!-- <apartment-list /> -->
    <app-footer />
  </div>
</template>

<style lang="scss">
@use "./styles/general.scss";

.page-container {
  background-color: var(--main-color);
}
</style>
