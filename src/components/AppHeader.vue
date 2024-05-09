<script>
import { store } from "../store";

export default {
  data() {
    return {
      title: "BoolBnB",
    };
  },
};
</script>

<template>
  <header class="navbar navbar-expand-lg navbar-light">
    <div class="d-flex w-100 justify-content-around">
      <router-link to="/">
        <img class="img-fluid logo" src="../assets/logo.png" alt="" />
      </router-link>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/registrati" class="btn btn-outline-dark"
            >Registrati</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/login" class="btn btn-outline-dark"
            >Login</router-link
          >
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

.logo {
  width: 70%;
  mix-blend-mode: multiply;
}

li {
  align-content: center;
}
</style>
