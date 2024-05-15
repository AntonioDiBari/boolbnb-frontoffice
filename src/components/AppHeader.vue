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
  <header>
    <div class="container d-flex justify-content-between">
      <div class="d-flex">
        <router-link :to="{ name: 'homepage' }">
          <div class="logo-box d-flex">
            <img src="../assets/logo.png" alt="logo" />
          </div>
        </router-link>
        <div class="title align-self-center">{{ this.title }}</div>
      </div>
      <div class="login-box gap-2 d-flex align-items-center">
        <a href="http://127.0.0.1:8000/register">
          <button class="btn btn-primary fw-bold">Registrati</button></a
        >
        <a href="http://127.0.0.1:8000/login">
          <button class="btn btn-primary fw-bold">Accedi</button></a
        >
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss";

header {
  height: 120px;
  background-color: var(--main-color);
  box-shadow: 0px -2px 3px 4px var(--main-color);
  background: linear-gradient(to top, var(--main-color), var(--gray));
  .title {
    font-size: 60px;
    font-weight: bold;
    color: #600b1f;
    opacity: 0.9;
    text-shadow: 0 0 2px;
  }

  .logo-box {
    height: 120px;
    aspect-ratio: 1;

    img {
      mix-blend-mode: multiply;
      width: 100%;
      height: 100%;
    }
  }

  .login-box {
    .btn-primary {
      background-color: #600b1f;
      box-shadow: 0 0 2px 0px #600b1f;
      opacity: 0.9;
      &:hover {
        background-color: #9e374f;
        opacity: 1;
      }
    }
  }
}
</style>
