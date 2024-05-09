<script>
import { store } from "../store";

export default {
  data() {
    return {
      store,
      images: [],
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

    fillImgsArray() {
      for (let i = 0; i < store.apartments.length; i++) {
        this.images.push(store.apartments[i].img);
      }
      console.log(this.images);
    },
  },

  mounted() {
    this.setAutoPlay();
    this.fillImgsArray();
  },
};
</script>

<template>
  <div
    class="slider-wrapper d-flex justify-content-between"
    tabindex="0"
    @mouseover="stopAutoPlay()"
    @mouseleave="setAutoPlay()"
  >
    <div class="item">
      <img :src="images[activeImg]" alt="immagine" />
    </div>

    <div class="thumbs">
      <div class="prev" @click="prevSlide"></div>
      <div class="next" @click="nextSlide"></div>
      <!-- <div class="thumb"> -->
      <img
        :v-for="(image, index) in images"
        :src="image"
        class="thumb"
        :class="index == activeImg ? 'active' : ''"
      />
      <!-- </div> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss";

.slider-wrapper {
  height: 300px;
}

.item {
  float: left;
  flex-grow: 1;
  height: 300px;
  position: relative;
}

.item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
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
  height: 300px;
  width: 300px;
  background: #000;
  position: relative;
  font-size: 0;
}

.thumb {
  height: 60px;
  width: 300px;

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
