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
  <header class="navbar navbar-expand-lg">
    <div class="container">

      <div class="d-flex w-100 justify-content-between">

        <!-- to do: collegare link -->
        <router-link to="/">
          <img class="img-fluid logo" src="../assets/logo.png" alt="" />
        </router-link>

        <div class="d-flex align-items-center">
          <h1 class="shadow-text" style="font-size: 5rem;">{{ title }}</h1>
        </div>


        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a href="http://127.0.0.1:8000/register" class="btn btn-outline-light">Registrati</a>
          </li>
          <li class="nav-item">
            <a href="http://127.0.0.1:8000/login" class="btn btn-outline-light">Accedi</a>
          </li>
        </ul>
      </div>
    </div>

  </header>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss";



.navbar {
  background-color: var(--main-color);
  max-height: 10vh;
}


.text-pink {
  color: #ff4081;
}

.shadow-text {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.btn {
  margin: 5px;
  border-color: var(--gray);
  background-color: var(--rose-red);
}

.logo {
  width: 170px;
  height: auto;
  mix-blend-mode: multiply;
}

li {
  align-content: center;
}
</style>
