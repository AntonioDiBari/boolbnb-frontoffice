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
      searchText: "",
    };
  },
  methods: {
    fillStore() {
      this.searchText = store.addressSearch;
    },

    searchbar() {
      let options = {
        searchOptions: {
          key: "ONRDNhUryVFGib0NMGnBqiPEWGkuIQvI",
          language: "it-IT",
          limit: 5,
        },
        autocompleteOptions: {
          key: "ONRDNhUryVFGib0NMGnBqiPEWGkuIQvI",
          language: "it-IT",
        },
      };
      let ttSearchBox = new tt.plugins.SearchBox(tt.services, options);
      let searchBoxHTML = ttSearchBox.getSearchBoxHTML();
      document.getElementById("searchbox").append(searchBoxHTML);
      const inputBox = document.querySelector(".tt-search-box-input");
      inputBox.addEventListener("input", (event) => {
        this.searchText = event.target.value;
        // console.log(event.target.value);
      });
    },

    onEditorChange($event) {
      // console.log($event.target.value);
      store.addressSearch = $event.target.value;
    },
  },

  components: { AppSlider, LoadingScreen },

  created() {
    this.myTimeout = setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  },

  mounted() {
    this.searchbar();
  },

  unmounted() {
    // this.fillStore();
    // console.log(this.searchText);
    // console.log(store.addressSearch);
    clearTimeout(this.myTimeout);
  },
};
</script>

<template>
  <loading-screen v-if="isLoading" />
  <form class="d-flex flex-column gap-4" @submit.prevent="submitSearch">
    <h1 class="mt-5 align-self-center">Trova il tua alloggio ideale</h1>
    <div @keyup="onEditorChange($event)" id="searchbox"></div>
    <div class="d-flex mt-4 justify-content-between">
      <div class="d-flex flex-column">
        <label class="form-label me-3" for="rooms">N° Stanze</label>
        <input
          v-model="store.roomsSearch"
          type="number"
          name="rooms"
          id="rooms"
          min="1"
          max="255"
        />
      </div>
      <div class="d-flex flex-column">
        <label class="form-label me-3" for="beds">N° Letti</label>
        <input
          v-model="store.bedsSearch"
          type="number"
          name="beds"
          id="beds"
          min="1"
          max="255"
        />
      </div>
      <div class="d-flex flex-column">
        <label class="form-label me-3" for="bagni">N° Bagni</label>
        <input
          v-model="store.bathroomsSearch"
          type="number"
          name="bagni"
          id="bagni"
          min="1"
          max="255"
        />
      </div>
      <div class="input-range d-flex flex-column gap-2 mb-2">
        <label for="range" class="form-label">Range di ricerca</label>
        <input
          v-model="store.rangeSearch"
          type="range"
          class="form-range m-0"
          min="1"
          max="100"
          step="1"
          id="range"
          value="20"
        />
        <!-- *************** Numero dinamico input range ***************** -->
        <!-- <input
            class="input-number"
            type="number"
            for="range"
            min="1"
            max="100"
            :value="searchRange"
          /> -->
        <div class="range-value">{{ store.rangeSearch }} Km</div>
      </div>
    </div>
    <router-link
      :to="{ name: 'apartment-search' }"
      class="px-5 btn btn-secondary hover-scale align-self-center fs-2 mt-5 mb-5"
    >
      Cerca
    </router-link>
  </form>
  <app-slider />
</template>

<style lang="scss" scoped>
.hover-scale {
  transition: transform 0.3s;
}

.hover-scale:hover {
  transform: scale(1.2);
}
</style>
