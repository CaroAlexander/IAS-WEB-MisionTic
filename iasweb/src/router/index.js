import { createWebHistory, createRouter } from "vue-router";

import Home from "@/views/Home.vue"
import Inventario from "@/views/Inventario.vue"
import Login from "@/views/Login.vue"
import Perfil from "@/views/Perfil.vue"
import Quienes from "@/views/Quienes.vue"
import NotFound from "@/views/NotFound.vue"
import NuevoProducto from "@/views/NuevoProducto.vue"
import EditarProducto from "@/views/EditarProducto.vue"

const routes = [
    {
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/inventario",
        name: "inventario",
        component: Inventario
    },
    {
        path: "/login",
        name: "login",
        component: Login
    },
    {
        path: "/perfil",
        name: "perfil",
        component: Perfil
    },
    {
        path: "/quienes",
        name: "quienes",
        component: Quienes
    },
    {
        path: "/nuevoproducto",
        name: "nuevoproducto",
        component: NuevoProducto
    },
    {
        path: "/editarproducto/:codigo",
        name: "editarproducto",
        component: EditarProducto
    },
    {
        path: "/:catchAll(.*)",
        component: NotFound

    }

];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router