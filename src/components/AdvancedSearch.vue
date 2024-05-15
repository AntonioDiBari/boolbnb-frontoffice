<script>
import { api, store } from "../store";
import axios from "axios";

export default {
  data() {
    return {
      store,
      api,
      allServices: [],
      searchText: store.addressSearch ?? "",
      searchBeds: store.bedsSearch ?? 1,
      searchRooms: store.roomsSearch ?? 1,
      searchRange: store.rangeSearch ?? 20,
      searchServices: [],
    };
  },

  props: [],
  emits: ["search"],
  created() {
    axios.get(api.baseUrl + "apartment-service").then((response) => {
      this.allServices = response.data.result;
    });
  },
  mounted() {
    this.searchbar();
  },
  methods: {
    searchbar() {
      let options = {
        searchOptions: {
          key: "J3iuAWIFiXr0BqrC4gh2RHMmzjR7mdUt",
          language: "it-IT",
          limit: 5,
        },
        autocompleteOptions: {
          key: "J3iuAWIFiXr0BqrC4gh2RHMmzjR7mdUt",
          language: "it-IT",
        },
      };
      let ttSearchBox = new tt.plugins.SearchBox(tt.services, options);
      let searchBoxHTML = ttSearchBox.getSearchBoxHTML();
      document.getElementById("searchbox").append(searchBoxHTML);
      const inputBox = document.querySelector(".tt-search-box-input");
      inputBox.setAttribute("value", store.addressSearch ?? "");
      inputBox.addEventListener("input", (event) => {
        this.searchText = event.target.value;
        // console.log(event);
      });
    },
    submitSearch() {
      if (this.search.rooms !== null && this.search.rooms <= 0) {
        alert("Il numero di camere non può essere negativo");
        return;
      }
      if (this.search.beds !== null && this.search.beds <= 0) {
        alert("Il numero di letti non può essere negativo");
        return;
      }
    },
    handleServiceClick(id) {
      if (!this.searchServices.includes(id)) {
        this.searchServices.push(id);
      } else {
        this.searchServices = this.searchServices.filter(
          (elemento) => elemento !== id
        );
      }
    },
  },
};
</script>

<template>
  <div class="container d-flex">
    <div class="input-group mb-4">
      <!-- <input
        type="text"
        :placeholder="store.addressSearch"
        v-model="searchText"
        class="form-control"
        @keyup.enter="$emit('search', searchText)"
      /> -->
      <div id="searchbox"></div>
      <div>
        <button
          class="btn btn-primary"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
        >
          Filtri avanzati
        </button>
        <button class="btn btn-secondary" @click="$emit('search', searchText)">
          Cerca
        </button>
      </div>
    </div>
  </div>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title fs-3" id="offcanvasExampleLabel">
        <strong> Filtri Avanzati </strong>
      </h5>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
      ></button>
    </div>
    <div class="offcanvas-body p-4">
      <div class="fs-4">Cerca l'alloggio che fa per te!</div>
      <div class="mt-3 fs-5">
        <label for="range" class="form-label">Range di ricerca</label>
        <div class="input-range d-flex gap-1 mb-2">
          <input
            v-model="searchRange"
            type="range"
            class="form-range m-0"
            min="1"
            max="100"
            step="1"
            id="range"
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
          <div class="range-value">{{ searchRange }} Km</div>
        </div>
        <div class="row">
          <div class="col-6">
            <label for="beds" class="form-label me-3">N° Letti</label>
            <input
              class="w-75"
              v-model="searchBeds"
              type="number"
              min="1"
              max="20"
              id="beds"
              name="beds"
            />
          </div>
          <div class="col-6">
            <label for="rooms" class="form-label me-3">N° Stanze</label>
            <input
              class="w-75"
              v-model="searchRooms"
              type="number"
              min="1"
              max="50"
              id="rooms"
              name="rooms"
            />
          </div>
          <label for="" class="my-2"
            >Scegli tra i servizi quale desideri:</label
          >
          <div class="col-6" v-for="service in allServices">
            <div v-show="this.allServices.length > 0" class="form-check">
              <input
                @click="handleServiceClick(service.id)"
                class="form-check-input"
                type="checkbox"
                :id="service.id"
                :value="service.id"
              />
              <label class="form-check-label" :for="service.id">
                {{ service.name }}
              </label>
            </div>
          </div>
        </div>
        <button
          @click="
            $emit(
              'search',
              searchText,
              searchRange,
              searchBeds,
              searchRooms,
              searchServices
            )
          "
          class="btn btn-modal"
        >
          Ricerca Avanzata
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables";
.container {
  justify-content: center;
  .input-group {
    width: 70%;
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .btn-primary {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .btn-secondary {
    font-size: 20px;
    padding: 7px 18px;
    background-color: var(--gray);
    border: none;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    &:hover {
      cursor: pointer;
      opacity: 0.8;
      transition: 0.5s;
    }
  }
  .btn-modal {
    font-size: 18px;
    padding: 7px 18px;
    margin: 10px 0;
    color: var(--white);
    background-color: var(--main-color);
    border: none;
    &:hover {
      cursor: pointer;
      opacity: 0.8;
      transition: 0.5s;
    }
  }

  #searchbox {
    width: 70%;
    .tt-search-box {
      width: 100%;
    }
  }
  .offcanvas {
    width: 500px;
    color: var(--rose-red);
    .offcanvas-title {
      color: var(--main-color);
    }
    .range-value {
      width: 65px;
      text-align: end;
      line-height: 20px;
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
    .input-number {
      width: 60px;
    }
  }
}
</style>
