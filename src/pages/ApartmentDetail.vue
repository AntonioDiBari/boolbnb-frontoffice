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
    <h1 class="page-title">{{ apartment.title_desc }}</h1>
    <div class="row">
      <div class="col-md-6">
        <div class="apartment-image">
          <img
            v-if="apartment.img"
            :src="apartment.img"
            class="card-img-top"
            alt="..."
          />
        </div>
        <div class="apartment-info">
          <p><strong>Indirizzo:</strong> {{ address[0] }}</p>
          <p><strong>Stanze:</strong> {{ apartment.n_rooms }}</p>
          <p><strong>Letti:</strong> {{ apartment.n_beds }}</p>
          <p><strong>Bagni:</strong> {{ apartment.n_bathroom }}</p>
          <p><strong>Mt²:</strong> {{ apartment.square_mts }}</p>
          <!-- <p><strong>Posizione:</strong> {{ }}</p> -->
        </div>
      </div>
      <div class="col-md-6">
        <div class="apartment-services">
          <p><strong>Servizi:</strong></p>
          <ul>
            <li v-for="service in apartment.services" :key="service">
              <font-awesome-icon :icon="`fa-solid fa-${service.logo}`" />
              {{ service.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss";

.container {
  padding-top: 20px;
  background-color: var(--main-color);
  color: black;
}

.page-title {
  margin-bottom: 20px;
}

.apartment-image img {
  width: 100%;
  height: auto;
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
