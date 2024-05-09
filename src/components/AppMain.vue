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
      <form @submit.prevent="submitSearch" class="search-form">
        <div>
          <h3>Trova il tua alloggio ideale</h3>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="mb-3">
              <label for="name" class="form-label">Nome Appartamento</label>
              <input
                type="text"
                class="form-control"
                id="name"
                v-model="search.name"
              />
            </div>
            <div class="mb-3">
              <label for="address" class="form-label">Indirizzo</label>
              <input
                type="text"
                class="form-control"
                id="address"
                v-model="search.address"
              />
            </div>
            <div class="row">
              <div class="col-md-4 mb-3">
                <label for="rooms" class="form-label">N° Camere</label>
                <input
                  type="number"
                  class="form-control"
                  id="rooms"
                  v-model="search.rooms"
                />
              </div>
              <div class="col-md-4 mb-3">
                <label for="bathrooms" class="form-label">N° Bagni</label>
                <input
                  type="number"
                  class="form-control"
                  id="bathrooms"
                  v-model="search.bathrooms"
                />
              </div>
              <div class="col-md-4 mb-3">
                <label for="beds" class="form-label">N° Letti</label>
                <input
                  type="number"
                  class="form-control"
                  id="beds"
                  v-model="search.beds"
                />
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="mb-3">
              <label class="form-label">Servizi</label>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="wifi"
                  id="wifi"
                  v-model="search.services"
                />
                <label class="form-check-label" for="wifi">WiFi</label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="parking"
                  id="parking"
                  v-model="search.services"
                />
                <label class="form-check-label" for="parking">
                  Posto Macchina
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="pool"
                  id="pool"
                  v-model="search.services"
                />
                <label class="form-check-label" for="pool"> Piscina </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="reception"
                  id="reception"
                  v-model="search.services"
                />
                <label class="form-check-label" for="reception">
                  Portineria
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="sauna"
                  id="sauna"
                  v-model="search.services"
                />
                <label class="form-check-label" for="sauna"> Sauna </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="view"
                  id="view"
                  v-model="search.services"
                />
                <label class="form-check-label" for="view"> Vista Mare </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="garden"
                  id="garden"
                  v-model="search.services"
                />
                <label class="form-check-label" for="garden"> Giardino </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="elevator"
                  id="elevator"
                  v-model="search.services"
                />
                <label class="form-check-label" for="elevator">
                  Ascensore
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="animals"
                  id="animals"
                  v-model="search.services"
                />
                <label class="form-check-label" for="animals">
                  Animali ammessi
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="air"
                  id="air"
                  v-model="search.services"
                />
                <label class="form-check-label" for="air">
                  Aria Condizionata
                </label>
              </div>
            </div>
          </div>
        </div>
        <button type="submit" class="btn btn-outline-dark">Cerca</button>
      </form>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.search-form {
  margin-top: 20px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  color: #333;
}
</style>
