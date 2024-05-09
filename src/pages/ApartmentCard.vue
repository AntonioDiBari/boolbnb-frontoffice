<script>
export default {
    props: { apartment: Object },

};
</script>

<template>
    <!-- to fix -->
    <div class="col">
        <div class="card h-100">
            <img v-if="aparetment.image" :src="apartment.image" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{ apartment.slug }}</h5>
                <p class="card-text">{{ apartment.title }}</p>
                <a href="#" class="btn btn-primary">Dettaglio</a>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped></style>