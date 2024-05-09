import { reactive } from "vue";

export const api = {
  baseUrl: "http://127.0.0.1:8000/api/",
};

export const store = reactive({
  apartments: [
    {
      title_desc: "Appartamento carino",
      n_rooms: 3,
      n_bathrooms: 4,
      n_beds: 5,
      square_mts: 90,
      img: "01.jpg",
      visible: 1,
    },
  ],
});
