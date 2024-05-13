<script>
import { store } from "../store/index";
import AppSlider from "../components/AppSlider.vue";

export default {
  data() {
    return {
      store,
      isLoading: true,
    };
  },
  methods: {},

  components: { AppSlider, LoadingScreen },
};
</script>

<template>
  <form class="d-flex flex-column gap-4" @submit.prevent="submitSearch">
    <h1 class="mt-5 align-self-center">Trova il tua alloggio ideale</h1>
    <label for="address" class="form-label align-self-center fs-3"
      >Cerca un indirizzo</label
    >
    <input
      type="text"
      class="form-control w-50 align-self-center"
      v-model="store.addressSearch"
    />
    <router-link
      :to="{ name: 'apartment-search' }"
      class="btn btn-outline-dark align-self-center mt-5 mb-5"
    >
      Cerca
    </router-link>
  </form>
  <app-slider />
</template>

<style lang="scss" scoped></style>
