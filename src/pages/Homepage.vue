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
    <h1 class="font align-self-center fw-bold">Trova il tuo alloggio ideale</h1>
    <div @keyup="onEditorChange($event)" id="searchbox"></div>
    <div class="row mt-4 justify-content-between">
      <div class="col-sm-3 flex-column">
        <label class="form-label me-3 fs-5" for="rooms">N° Stanze</label>
        <input
          v-model="store.roomsSearch"
          class="form-control"
          type="number"
          name="rooms"
          id="rooms"
          min="1"
          max="255"
        />
      </div>
      <div class="col-sm-3 flex-column">
        <label class="form-label me-3 fs-5" for="beds">N° Letti</label>
        <input
          v-model="store.bedsSearch"
          class="form-control"
          type="number"
          name="beds"
          id="beds"
          min="1"
          max="255"
        />
      </div>
      <div class="col-sm-3 flex-column">
        <label class="form-label me-3 fs-5" for="bagni">N° Bagni</label>
        <input
          class="form-control"
          v-model="store.bathroomsSearch"
          type="number"
          name="bagni"
          id="bagni"
          min="1"
          max="255"
        />
      </div>
      <div class="input-range col-sm-3 flex-column gap-2 mb-2">
        <label for="range" class="form-label fs-5">Range di ricerca</label>
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
      class="hover-scale align-self-center fs-2 mb-5"
    >
      <div class="btn btn-primary fw-bold">Cerca</div>
    </router-link>
  </form>
  <app-slider />
</template>

<style lang="scss" scoped>
form {
  padding: 0 10rem;
}
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

input[type="range"] {
  height: 25px;
  -webkit-appearance: none;
  margin: 10px 0;
  width: 100%;
}

input[type="range"]:focus {
  outline: none;
}

input[type="range"]::-webkit-slider-runnable-track {
  width: 100%;
  height: 12px;
  cursor: pointer;
  animate: 0.2s;
  box-shadow: 0px 0px 6px #918ec0;
  background: #f7f7f7;
  border-radius: 6px;
  border: 0px solid #918ec0;
}

input[type="range"]::-webkit-slider-thumb {
  box-shadow: 1px 1px 1px #000031;
  border: 0px solid #00001e;
  height: 18px;
  width: 18px;
  border-radius: 25px;
  background: #918ec0;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -3px;
}

input[type="range"]:focus::-webkit-slider-runnable-track {
  background: #f7f7f7;
}

input[type="range"]::-moz-range-track {
  width: 100%;
  height: 12px;
  cursor: pointer;
  animate: 0.2s;
  box-shadow: 0px 0px 6px #918ec0;
  background: #f7f7f7;
  border-radius: 6px;
  border: 0px solid #918ec0;
}

input[type="range"]::-moz-range-thumb {
  box-shadow: 1px 1px 1px #000031;
  border: 0px solid #00001e;
  height: 18px;
  width: 18px;
  border-radius: 25px;
  background: #918ec0;
  cursor: pointer;
}

input[type="range"]::-ms-track {
  width: 100%;
  height: 12px;
  cursor: pointer;
  animate: 0.2s;
  background: transparent;
  border-color: transparent;
  color: transparent;
}

input[type="range"]::-ms-fill-lower {
  background: #f7f7f7;
  border: 0px solid #918ec0;
  border-radius: 12px;
  box-shadow: 0px 0px 6px #918ec0;
}

input[type="range"]::-ms-fill-upper {
  background: #f7f7f7;
  border: 0px solid #918ec0;
  border-radius: 12px;
  box-shadow: 0px 0px 6px #918ec0;
}

input[type="range"]::-ms-thumb {
  margin-top: 1px;
  box-shadow: 1px 1px 1px #000031;
  border: 0px solid #00001e;
  height: 18px;
  width: 18px;
  border-radius: 25px;
  background: #918ec0;
  cursor: pointer;
}

input[type="range"]:focus::-ms-fill-lower {
  background: #f7f7f7;
}

input[type="range"]:focus::-ms-fill-upper {
  background: #f7f7f7;
}

@media (max-width: 576px) {
  form {
    padding: 0 1rem;
  }
}
</style>
