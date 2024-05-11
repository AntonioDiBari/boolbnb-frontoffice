<script>
import { api } from "../store";
import axios from "axios";

export default {
  // props:{ApartmentDetail},

  data() {
    return {
      api,
      images: [],
      sponsoredApartments: [],
      activeImg: 0,
      autoplay: false,
    };
  },
  methods: {
    nextSlide() {
      if (this.activeImg >= this.images.length - 1) {
        this.activeImg = 0;
      } else {
        this.activeImg++;
      }
    },

    prevSlide() {
      if (this.activeImg <= 0) {
        this.activeImg = this.images.length - 1;
      } else {
        this.activeImg--;
      }
    },

    setAutoPlay() {
      this.autoplay = setInterval(() => {
        this.nextSlide();
      }, 3000);
    },

    stopAutoPlay() {
      clearInterval(this.autoplay);
    },

    fetchApartments() {
      axios.get(`${api.baseUrl}apartment-sponsor`).then((response) => {
        if (response.data.result && Array.isArray(response.data.result.data)) {
          this.images = response.data.result.data.map(
            (apartment) => apartment.img
          );
          this.sponsoredApartments = response.data.result.data;
        } else {
          console.error("formato immagine non valido");
        }
      });
    },
  },

  mounted() {
    this.fetchApartments();
    this.setAutoPlay();
  },
};
</script>

<template>
  <h4 v-if="sponsoredApartments.length > 0" class="text-center mb-5">
    Alcuni appartamenti consigliati da noi:
  </h4>
  <div
    v-if="sponsoredApartments.length > 0"
    class="slider-wrapper d-flex justify-content-between"
    tabindex="0"
    @mouseover="stopAutoPlay()"
    @mouseleave="setAutoPlay()"
  >
    <div class="item">
      <router-link
        :to="{
          name: 'apartment-detail',
          params: { slug: sponsoredApartments[activeImg].slug },
        }"
      >
        <img :src="images[activeImg]" alt="immagine" />
      </router-link>
    </div>

    <div class="thumbs" :style="{ '--thumb-count': images.length }">
      <div class="prev" @click="prevSlide"></div>
      <div class="next" @click="nextSlide"></div>

      <img
        v-for="(image, index) in images"
        :key="index"
        :src="image"
        class="thumb"
        :class="{
          active: index === activeImg,
          first: index === 0,
          last: index === images.length - 1,
        }"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss";

.slider-wrapper {
  height: 600px;

  border-radius: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.512);
}

.item {
  float: left;
  flex-grow: 1;

  position: relative;
  cursor: pointer;
}

.item img {
  width: 100%;
  height: 100%;
  object-fit: fill;
  border-radius: 20px 0 0 20px;
  cursor: pointer;
}

.item .text {
  position: absolute;
  right: 20px;
  bottom: 20px;
  text-align: right;
  color: white;
}

.thumbs {
  float: left;

  width: 200px;
  background: #000;
  position: relative;
  font-size: 0;

  border-radius: 0 20px 20px 0;
}

.thumb {
  height: calc(100% / var(--thumb-count));
  width: 200px;

  opacity: 0.5;
}

.thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.thumb.active {
  border: 2px solid #ccc;
  opacity: 1;
}

.first {
  border-radius: 0 20px 0 0;
}

.last {
  border-radius: 0 0 20px 0;
}

.prev,
.next {
  width: 20px;
  height: 20px;
  margin: 10px 0;
  border-radius: 50%;
  background: #ccc;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  cursor: pointer;
  z-index: 999;
}

.next {
  bottom: 0;
}

/*
EXTRA: in questo esempio gli accordion vengono creati
usando 2 bordi di un quadratino ruotato di 45 gradi
In una versione base si possono usare delle icone
oppure i caratteri ∧ (&and;) e ∨ (&or;)
 */
.prev::after {
  content: "";
  width: 10px;
  height: 10px;
  border-top: 1px solid black;
  border-right: 1px solid black;
  display: block;
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%) rotate(-45deg);
}

.next::before {
  content: "";
  width: 10px;
  height: 10px;
  border-top: 1px solid black;
  border-right: 1px solid black;
  display: block;
  position: absolute;
  bottom: 35%;
  left: 50%;
  transform: translate(-50%) rotate(135deg);
}
</style>
