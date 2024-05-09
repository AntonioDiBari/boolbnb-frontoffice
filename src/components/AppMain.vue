<script>
import { store } from "../store";

export default {
  data() {
    return {
      search: {
        address: "",
        beds: null,
        rooms: null,
        bathrooms: null,
        services: [],
      },
    };
  },
  methods: {
    submitSearch() {
      // controlli
      if (this.search.rooms !== null && this.search.rooms < 0) {
        alert("Il numero di camere non può essere negativo");
        return;
      }
      if (this.search.bathrooms !== null && this.search.bathrooms < 0) {
        alert("Il numero di bagni non può essere negativo");
        return;
      }
      if (this.search.beds !== null && this.search.beds < 0) {
        alert("Il numero di letti non può essere negativo");
        return;
      }
      console.log(this.search);
    },
  },
};
</script>

<template>
  <main>
    <div class="container">
      <form class="d-flex flex-column gap-4" @submit.prevent="submitSearch">
        <h1 class="mt-5 align-self-center">Trova il tua alloggio ideale</h1>
        <label for="address" class="form-label align-self-center fs-3"
          >Cerca un indirizzo</label
        >
        <input
          type="text"
          class="form-control w-50 align-self-center"
          id="address"
          v-model="search.address"
        />
        <button
          type="submit"
          class="btn btn-outline-dark align-self-center mt-5 mb-5"
        >
          Cerca
        </button>
      </form>
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  height: 80vh;
}
</style>
