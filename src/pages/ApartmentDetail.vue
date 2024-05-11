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
      email: "",
      body: "",
      error: {},
      success: false,
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

    sendContactForm() {
      let date = new Date();
      let month =
        date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1;
      let day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
      let hours =
        date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
      let minutes =
        date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
      const fillingData = {
        email: this.email,
        sent:
          date.getFullYear() +
          "-" +
          month +
          "-" +
          day +
          " " +
          hours +
          ":" +
          minutes +
          ":00",
        body: this.body,
      };
      this.errors = {};

      const config = {
        request: fillingData,
      };

      axios
        .post(`${api.baseUrl}message/${this.apartment.id}`, config)
        .then((response) => {
          this.success = response.data.success;
          console.log(response.data);

          // if (this.success) {
          //   this.resetFields();
          // } else {
          //   this.errors = response.data.errors;
          // }
        })
        .catch(function (error) {
          console.warn(error);
        });
    },
    resetFields() {
      this.email = "";
      this.body = "";
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
      <h5 class="fs-4 m-1">Hosted by:</h5>
      <p class="fs-5 m-1">
        {{ apartment.user.name }} {{ apartment.user.surname }}
      </p>
      <button
        type="button"
        class="btn btn-primary m-1"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
        data-bs-whatever="@getbootstrap"
      >
        Contatta
      </button>
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
  <div
    id="staticBackdrop"
    data-bs-backdrop="static"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">
            Nuovo messaggio
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label">Mail:</label>
              <input
                type="text"
                class="form-control"
                id="recipient-name"
                v-model="email"
              />
            </div>
            <div class="mb-3">
              <label for="message-text" class="col-form-label"
                >Messaggio:</label
              >
              <textarea
                class="form-control"
                id="message-text"
                v-model="body"
              ></textarea>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Chiudi
          </button>
          <button
            @click="this.sendContactForm()"
            type="button"
            class="btn btn-primary"
          >
            Invia
          </button>
        </div>
      </div>
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
