import { createRouter, createWebHistory } from "vue-router";

import ApartmentList from "./pages/ApartmentList.vue";
import AppMain from "./components/AppMain.vue";
import AdvancedSearch from "./components/AdvancedSearch.vue";
import ApartmentDetail from "./pages/ApartmentDetail.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "main",
            component: AppMain,
        },
        {
            path: "/apartment-search",
            name: "apartment-search",
            component: ApartmentList,
        },
        {
            path: "/apartments/:id",
            name: "apartment-detail",
            component: ApartmentDetail,
            props: true
        }
    ],
});
export { router };
