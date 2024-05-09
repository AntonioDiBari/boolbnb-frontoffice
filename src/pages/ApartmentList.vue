<script>
import { api, store } from "../store";
import axios from "axios";

import ApartmentCard from './ApartmentCard.vue';

export default {
    data() {
        return {
            store,
            apartments: []
        };
    },

    props: [],
    components: { ApartmentCard },

    created() {
        axios.get(store.api.baseUrl + 'apartments').then((response) => {
            this.apartments = response.data.data;
        });
    },


};
</script>

<template>
    <div class="container">
        <!-- <div class="row row-cols-4 g-3">
            <apartment-card v-for="apartment in store.apartments" />
        </div> -->

        <h1 class="page-title">Apartment List</h1>
        <ul class="apartment-list">
            <ApartmentCard v-for="apartment in apartments" :key="apartment.id" class="apartment-item" />
        </ul>

    </div>
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
