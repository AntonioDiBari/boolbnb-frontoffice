<script>
export default {
  props: { apartment: Object, address: String },
};
</script>

<template>
  <div class="col">
    <div class="card h-100">
      <div class="apartment-item h-100">
        <div class="apartment-content">
          <img
            v-if="apartment.img"
            :src="apartment.img"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h2 class="title text-light">{{ apartment.title_desc }}</h2>
            <h5>{{ address }}</h5>
            <div class="details">
              <div class="detail">
                <strong>Rooms: </strong> {{ apartment.n_rooms }}
              </div>
              <div class="detail">
                <strong>Beds: </strong> {{ apartment.n_beds }}
              </div>
              <div class="detail">
                <strong>Bathrooms: </strong> {{ apartment.n_bathrooms }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss";

.apartment-item {
  background-color: var(--main-color);
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.apartment-content {
  padding: 20px;
}

.apartment-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 10px;
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
