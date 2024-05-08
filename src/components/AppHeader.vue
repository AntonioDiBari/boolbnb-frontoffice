<script>
import { store } from "../store";

export default {
    data() {
        return {
            title: 'BoolBnB',
        };
    },
};
</script>

<template>

    <header class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <router-link to="/" class="navbar-brand">
                <h1 class="display-4 text-pink shadow-text">{{ title }}</h1>
            </router-link>
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <router-link to="/registrati" class="btn btn-primary">Registrati</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/login" class="btn btn-primary">Login</router-link>
                </li>
            </ul>
        </div>
    </header>


</template>

<style lang="scss" scoped>
.text-pink {
    color: #ff4081;
}

.shadow-text {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.btn {
    margin: 5px;
}
</style>
