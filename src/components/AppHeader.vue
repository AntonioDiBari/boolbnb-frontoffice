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
        <div class="logo-box d-flex">
          <img src="../assets/logo.png" alt="logo" />
        </div>
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
  <!-- // <div class="d-flex">
//   <a href="http://127.0.0.1:8000/register">
//     <div class="btn">Registrati</div>
//   </a>
//   <a href="http://127.0.0.1:8000/login"
//     ><div class="btn">Accedi</div></a
//   >
// </div> -->
</template>

<style lang="scss" scoped>
@use "../styles/general.scss";

header {
  height: 120px;
  background-color: var(--main-color);
  box-shadow: 0px -2px 3px 4px var(--main-color);
  background: linear-gradient(
    180deg,
    rgba(91, 89, 119, 1) 0%,
    rgba(122, 119, 161, 1) 26%,
    rgba(145, 142, 192, 1) 100%
  );
  .title {
    font-size: 60px;
    font-weight: bold;
    color: #681736;
    opacity: 0.9;
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
      background-color: #681736;
      opacity: 0.9;
      &:hover {
        background-color: rgb(225, 225, 225);
        color: var(--rose-red);
      }
    }
  }
}
</style>
