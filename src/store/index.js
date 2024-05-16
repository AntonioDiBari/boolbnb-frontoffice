import { reactive } from "vue";

export const api = {
  baseUrl: "http://127.0.0.1:8000/api/",
};

export const store = reactive({
  apartments: [],
  addressSearch: "",
  roomsSearch: 1,
  bedsSearch: 1,
  bathroomsSearch: 1,
  rangeSearch: 1,
  services: [
    "fa-wifi",
    "fa-square-parking",
    "fa-person-swimming",
    "fa-bell-concierge",
    "fa-hot-tub-person",
    "fa-water",
    "fa-seedling",
    "fa-elevator",
    "fa-paw",
    "fa-snowflake",
  ],
});
