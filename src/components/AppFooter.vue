<script>
import { store } from "../store";

export default {
  data() {
    return {};
  },
};
</script>

<template>
  <footer class="text-white p-4">
    <div class="container">

      <div class="d-flex justify-content-between">
        <div>
          <p class="h6 fw-bold text-pink">&copy; BOOLBNB, TEAM 4</p>
          <p style="font-size: 10px" class="fw-lighter">
            Trova il tuo alloggio ideale
          </p>

          <!-- to do: fixare icone fontawesome -->
          <div class="social">
            <p>Trovaci anche sui nostri social!</p>
            <ul class="list-unstyled d-flex">
              <li class="me-3"><a href="#"><i class="fab fa-facebook"></i></a></li>
              <li class="me-3"><a href="#"><i class="fab fa-instagram"></i></a></li>
              <li class="me-3"><a href="#"><i class="fab fa-twitter"></i></a></li>
              <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
            </ul>
          </div>
        </div>

        <div class="info">
          <div class="row">
            <div class="col">
              <div class="fw-bold text-pink">INFO UTILI</div>
            </div>
          </div>
          <ul>
            <li><a href="#">Informativa sulla privacy</a></li>
            <li><a href="#">Informazioni legali</a></li>
            <li><a href="#">Diritto di recesso</a></li>
          </ul>
        </div>

        <div class="contacts">
          <div class="row">
            <div class="col">
              <div class="fw-bold text-pink">CONTATTI</div>
            </div>
          </div>

          <ul>
            <li><i class="fas fa-envelope"></i> <a href="mailto:info@boolbnb.com">info@boolbnb.com</a></li>
            <li><i class="fas fa-phone"></i> <a href="tel:+123456789">+123456789</a></li>
            <li><i class="fas fa-map-marker-alt"></i> Via Roma, 123</li>
          </ul>
        </div>

      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  // background-color: var(--main-color);

  background: linear-gradient(to bottom, var(--main-color), var(--gray));

  a {
    text-decoration: none;
    color: inherit;

    &:hover {
      text-decoration: underline;
      color: white;
    }
  }
}

.text-pink {
  color: #ff4081;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}
</style>
