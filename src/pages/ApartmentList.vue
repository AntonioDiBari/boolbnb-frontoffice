<script>
import { api, store } from "../store";
import axios from "axios";

import ApartmentCard from './ApartmentCard.vue';

export default {
    data() {
        return {
            store,
        };
    },

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
        <div class="row row-cols-4 g-3">
            <apartment-card v-for="apartment in store.apartments" />
        </div>
    </div>



</template>

<style lang="scss" scoped></style>
