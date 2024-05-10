<script>
import { api, store } from "../store";
// import axios from "axios";


export default {
    data() {
        return {
            store,
        };
    },
    props: { apartment: Object, address: String },
    methods: {},
    components: {},
};
</script>

<template>
    <div class="container">
        <h1 class="page-title">{{ apartment.title_desc }}</h1>
        <div class="row">
            <div class="col-md-6">
                <div class="apartment-image">
                    <img v-if="apartment.img" :src="apartment.img" class="card-img-top" alt="..." />
                </div>
                <div class="apartment-info">
                    <p><strong>Indirizzo:</strong> {{ address }}</p>
                    <p><strong>Stanze:</strong> {{ apartment.n_rooms }}</p>
                    <p><strong>Letti:</strong> {{ apartment.beds }}</p>
                    <p><strong>Bagni:</strong> {{ apartment.n_beds }}</p>
                    <p><strong>Mt²:</strong> {{ apartment.square_mts }}</p>
                    <!-- <p><strong>Posizione:</strong> {{ }}</p> -->
                </div>
            </div>
            <div class="col-md-6">
                <div class="apartment-services">
                    <p><strong>Servizi:</strong></p>
                    <ul>
                        <li v-for="service in apartment.services" :key="service">{{ service }}</li>
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
    color: var(--gray);

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
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>