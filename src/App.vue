<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  data() {
    return {};
  },

  props: {},
  methods: {},
  components: { AppHeader, AppFooter, AppMain },
};
</script>

<template>
  <div class="page-container">
    <app-header />

    <div class="container my-3">
      <app-main></app-main>
    </div>

    <app-footer />
  </div>
</template>

<style lang="scss">
@use "./styles/general.scss";

.page-container {
  background-color: var(--white);
}
</style>
