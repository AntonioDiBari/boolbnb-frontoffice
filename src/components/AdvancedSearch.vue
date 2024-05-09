<script>
import { api, store } from "../store";
import axios from "axios";

export default {
  data() {
    return {
      store,
      api,
      allServices: [],
      searchText: "",
      searchBeds: 1,
      searchRooms: 1,
      searchRange: 1,
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
  methods: {
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
    <div class="input-group mb-3">
      <input
        type="text"
        v-model="searchText"
        class="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-default"
        @keyup.enter="$emit('search', searchText)"
      />
      <button
        class="btn btn-primary"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasExample"
        aria-controls="offcanvasExample"
      >
        Filtri avanzati
      </button>
    </div>
  </div>
  <div
    class="offcanvas offcanvas-end"
    tabindex="-1"
    id="offcanvasExample"
    aria-labelledby="offcanvasExampleLabel"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasExampleLabel">
        Filtri Avanzati
      </h5>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <div>Cerca l'alloggio che fa per te!</div>
      <div class="mt-3">
        <label for="range" class="form-label">Range di ricerca</label>
        <input
          v-model="searchRange"
          type="range"
          class="form-range"
          min="1"
          max="100"
          step="5"
          id="range"
          value="50"
        />
        <label for="beds" class="form-label me-3">N° Letti</label>
        <input
          v-model="searchBeds"
          type="number"
          min="1"
          max="20"
          id="beds"
          name="beds"
        /><br />
        <label for="rooms" class="form-label me-3">N° Stanze</label>
        <input
          v-model="searchRooms"
          type="number"
          min="1"
          max="50"
          id="rooms"
          name="rooms"
        />
        <label for="" class="my-2">Scegli tra i servizi quale desideri:</label>
        <div
          v-show="this.allServices.length > 0"
          class="form-check"
          v-for="service in allServices"
        >
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
          class="btn btn-primary"
        >
          Ricerca Avanzata
        </button>
      </div>
    </div>
  </div>
</template>
