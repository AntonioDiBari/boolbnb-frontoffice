<script>
import { api, store } from "../store";
import axios from "axios";

import ApartmentCard from "../components/ApartmentCard.vue";
import AdvancedSearch from "../components/AdvancedSearch.vue";

export default {
  data() {
    return {
      store,
      api,
      apartments: [],
      services: [],
      addresses: [],
    };
  },

  props: [],
  components: { ApartmentCard, AdvancedSearch },

  methods: {
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
    this.fetchApartments();
  },
};
</script>

<template>
  <advanced-search @search="fetchApartments" />
  <h1 class="page-title">Lista Appartamenti</h1>
  <ul class="apartment-list">
    <div class="row rows-col-3 g-3">
      <ApartmentCard
        v-for="(apartment, index) in apartments"
        :key="apartment.id"
        :apartment="apartment"
        :address="addresses[index]"
      />
    </div>
  </ul>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss";

.container {
  background-color: var(--main-color);
  color: var(--gray);
}

.page-title {
  font-size: 36px;
  margin-bottom: 20px;
  text-align: center;
}

.apartment-list {
  list-style: none;
  padding: 0;
}
</style>
