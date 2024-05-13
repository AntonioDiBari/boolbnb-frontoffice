<script>
import { store } from "../store/index";
import AppSlider from "../components/AppSlider.vue";
import LoadingScreen from "../components/LoadingScreen.vue";

export default {
  data() {
    return {
      store,
      isLoading: true,
      myTimeout: null,
    };
  },
  methods: {},

  components: { AppSlider, LoadingScreen },

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
  <form class="d-flex flex-column gap-4" @submit.prevent="submitSearch">
    <h1 class="mt-5 align-self-center">Trova il tua alloggio ideale</h1>
    <!-- <label for="address" class="form-label align-self-center fs-3"
      >Cerca un indirizzo</label
    >
    <input
      type="text"
      class="form-control w-50 align-self-center"
      v-model="store.addressSearch"
    /> -->
    <router-link
      :to="{ name: 'apartment-search' }"
      class="button hover-scale align-self-center fs-2 mt-5 mb-5"
    >
      Cerca
    </router-link>
  </form>
  <app-slider />
</template>

<style lang="scss" scoped>
.button {
  display: inline-block;
  color: var(--rose-red);
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

.hover-scale {
  transition: transform 0.3s;
}

.hover-scale:hover {
  transform: scale(1.2);
}
</style>
