<template>
    <div class="contenido">
            <div class="row">
                
                <div v-for="producto in productos" :key="producto.id" class="col justify-content-center">
                    <div class="card mb-3" style="width: 18rem;">
                        <img class="card-img-top" src="https://picsum.photos/200/200" alt="Card image cap">
                        <div class="card-body">
                            <h4 class="card-title">{{producto.producto}}</h4>
                            <h5 class="card-text">x{{producto.presentacion}}</h5>
                            <p class="card-text">Descripcion: {{producto.descripcion}}</p>
                            <p class="card-text"> <strong>{{producto.precio}}</strong> </p>
                            <div class="text-center">
                                <!-- <a href="#" class="btn btn-outline-success">Comprar <i
                                        class="fas fa-dollar-sign"></i></a>
                                <a href="#" class="btn btn-outline-primary">Carrito <i
                                        class="fas fa-shopping-cart"></i></a> -->
                            </div>
                        </div>
                    </div>
                </div>

            </div>   
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            productos:[]
        }
    },
    created(){
        this.cargarProductos();
    },
    methods:{
        cargarProductos(){
            axios.get('http://localhost:3000/api/productos')
            .then(response => {
                let status_peticion = response.status
                console.log(status_peticion)
                this.productos= response.data
            })
        }
    }
}
</script>