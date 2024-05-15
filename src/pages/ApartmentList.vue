<script>
import { api, store } from "../store";
import axios from "axios";

import ApartmentCard from "../components/ApartmentCard.vue";
import AdvancedSearch from "../components/AdvancedSearch.vue";
import LoadingScreen from "../components/LoadingScreen.vue";

export default {
  data() {
    return {
      store,
      api,
      apartments: [],
      services: [],
      addresses: [],
      isLoading: true,
      myTimeout: null,
    };
  },

  props: [],
  components: { ApartmentCard, AdvancedSearch, LoadingScreen },

  methods: {
    clearStore() {
      (store.addressSearch = ""),
        (store.roomsSearch = 1),
        (store.bedsSearch = 1),
        (store.bathroomsSearch = 1),
        (store.rangeSearch = 20);
    },

    fetchApartmentsFirst() {
      axios
        .get(api.baseUrl + "apartments", {
          params: {
            beds: store.bedsSearch ?? 1,
            rooms: store.roomsSearch ?? 1,
            services: [],
            address: store.addressSearch ?? "",
            range: store.rangeSearch ?? 20,
          },
        })
        .then((response) => {
          this.apartments = response.data.result;
          this.addresses = response.data.addresses;
        });
    },

    fetchApartments(
      searchText,
      searchRange,
      searchBeds,
      searchRooms,
      searchServices
    ) {
      axios
        .get(api.baseUrl + "apartments", {
          params: {
            beds: searchBeds ?? 1,
            rooms: searchRooms ?? 1,
            services: searchServices ?? [],
            address: searchText ?? "",
            range: searchRange ?? 20,
          },
        })
        .then((response) => {
          this.apartments = response.data.result;
          this.addresses = response.data.addresses;
        });
    },
  },
  created() {
    // console.log(store.addressSearch);
    this.fetchApartmentsFirst();
  },

  mounted() {
    this.myTimeout = setTimeout(() => {
      this.isLoading = false;
    }, 6000);
  },

  unmounted() {
    this.clearStore();
    clearTimeout(this.myTimeout);
  },
};
</script>

<template>
  <!-- <h1></h1> -->
  <loading-screen v-if="isLoading" />
  <advanced-search @search="fetchApartments" />
  <h2 class="page-title mb-4">Lista Appartamenti</h2>
  <div v-if="apartments.length != 0" class="row g-3">
    <div v-for="(apartment, index) in apartments" class="col-4">
      <ApartmentCard
        :key="apartment.id"
        :apartment="apartment"
        :address="addresses[index]"
      />
    </div>
  </div>
  <div class="text-center mt-5 fs-4 h-all" v-else>Nessun risultato trovato</div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/_variables.scss" as *;

.page-title {
  font-size: 36px;
  margin-bottom: 20px;
  text-align: center;
}

.h-all {
  height: 500px;
}
</style>
