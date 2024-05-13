<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";
import LoadingScreen from "./components/LoadingScreen.vue";

export default {
  data() {
    return {
      isLoading: true,
      myTimeout: null,
    };
  },

  props: {},
  methods: {},
  components: { AppHeader, AppFooter, AppMain, LoadingScreen },

  created() {
    this.myTimeout = setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  },

  beforeDestroy() {
    clearTimeout(this.myTimeout);
  },
};
</script>

<template>
  <loading-screen v-if="isLoading" />
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
