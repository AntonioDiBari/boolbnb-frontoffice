<script>
export default {
  methods: {
    getAbstract(string) {
      let newString;
      if (string.length >= 15) {
        newString = string.slice(0, 15) + "...";
        return newString;
      } else {
        return string;
      }
    },
  },

  props: { apartment: Object, address: String },
};
</script>

<template>
  <router-link
    :to="{ name: 'apartment-detail', params: { slug: apartment.slug } }"
  >
    <div class="card h-100">
      <div class="apartment-item h-100">
        <div class="apartment-content">
          <img
            v-if="apartment.img"
            :src="apartment.img"
            class="apartment-image"
            alt="..."
          />
          <div class="card-body">
            <h4 class="text-light">{{ getAbstract(apartment.title_desc) }}</h4>
            <!-- <span>{{ getAbstract(address) }}</span> -->
            <span>{{ address }}</span>
            <div class="details mt-2">
              <div class="detail">
                <strong>Stanze: </strong> {{ apartment.n_rooms }}
              </div>
              <div class="detail">
                <strong>Letti: </strong> {{ apartment.n_beds }}
              </div>
              <div class="detail">
                <strong>Bathrooms: </strong> {{ apartment.n_bathrooms }}
              </div>
            </div>
            <div class="services d-flex gap-3 mt-2">
              <font-awesome-icon
                v-for="service in apartment.services"
                :icon="`fa-solid fa-${service.logo}`"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss";

.card {
  cursor: pointer;
  border-radius: 8px;
  overflow: hidden;
  &:hover {
    opacity: 0.9;
    transition: 0.5s;
  }
}
.apartment-item {
  background-color: var(--main-color);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.apartment-content {
  padding: 20px;
  height: 100%;
}

.apartment-image {
  object-fit: cover;
  width: 100%;
  height: 200px;
  border-radius: 8px;
}

.title {
  font-size: 24px;
  margin-bottom: 10px;
}

.description {
  font-size: 16px;
  margin-bottom: 10px;
}

.details {
  display: flex;
}

.detail {
  margin-right: 20px;
  font-size: 14px;
}
</style>
