<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { api, store } from "../store";
import axios from "axios";

export default {
  data() {
    return {
      store,
      api,
      apartment: [],
      address: "",
    };
  },
  methods: {
    fetchApartment() {
      const slug = this.$route.params.slug;
      axios.get(api.baseUrl + `apartments/${slug}`).then((res) => {
        this.apartment = res.data.result;
        this.address = res.data.address;
      });
    },
  },
  components: {},
  created() {
    this.fetchApartment();
  },
};
</script>

<template>
  <div class="container">
    <div class="header-apartment px-4 mb-4">
      <h1 class="page-title">{{ apartment.title_desc }}</h1>
      <p>
        <strong><font-awesome-icon icon="fa-solid fa-location-dot" /></strong>
        {{ address[0] }}
      </p>
    </div>

    <div class="apartment-image d-flex px-4">
      <img v-if="apartment.img" :src="apartment.img" alt="..." />
    </div>

    <div class="row g-3 px-4 mt-2 justify-content-center">
      <div v-for="service in apartment.services" :key="service" class="col-2">
        <div class="service d-flex gap-3">
          <font-awesome-icon
            class="align-self-center fs-4"
            :icon="`fa-solid fa-${service.logo}`"
          />
          <span class="align-self-center">{{ service.name }}</span>
        </div>
      </div>
    </div>

    <div class="apartment-info">
      <p><strong>Stanze:</strong> {{ apartment.n_rooms }}</p>
      <p><strong>Letti:</strong> {{ apartment.n_beds }}</p>
      <p><strong>Bagni:</strong> {{ apartment.n_bathrooms }}</p>
      <p><strong>Mt²:</strong> {{ apartment.square_mts }}</p>
      <!-- Da inserire in un div apparte con mappa relativa -->
      <!-- <p><strong>Posizione:</strong> {{ }}</p> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss";

.container {
  padding-top: 20px;
  color: black;
}

.service {
  background-color: var(--main-color);
  padding: 10px;
  border-radius: 10px;
}

.page-title {
  margin-bottom: 10px;
}

.apartment-image img {
  image-rendering: pixelated;
  object-fit: cover;
  width: 100%;
  height: 400px;
}

.apartment-info {
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.apartment-services {
  padding: 20px;
  color: black;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
}
</style>
