<script>
export default {
    props: { apartment: Object },

};
</script>

<template>
    <!-- to fix -->
    <div class="col">
        <div class="card h-100">
            <!-- <img v-if="aparetment.image" :src="apartment.image" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{ apartment.slug }}</h5>
                <p class="card-text">{{ apartment.title }}</p>
                <a href="#" class="btn btn-primary">Dettaglio</a>
            </div> -->

            <div class="apartment-item">
                <div class="apartment-content">
                    <img v-if="aparetment.image" :src="apartment.image" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h2 class="title">{{ apartment.title }}</h2>
                        <p class="description">{{ apartment.description }}</p>
                        <div class="details">
                            <div class="detail">
                                <strong>Rooms: </strong> {{ apartment.rooms }}
                            </div>
                            <div class="detail">
                                <strong>Beds: </strong> {{ apartment.beds }}
                            </div>
                            <div class="detail">
                                <strong>Bathrooms: </strong> {{ apartment.bathrooms }}
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
    margin-bottom: 20px;
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