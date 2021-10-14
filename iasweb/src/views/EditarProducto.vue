<template>
    <div class="contenido">
        <div class=" bg-light rounded p-3 my-3">
            <section>
                <h2 class="text-left"><strong>Edite el producto</strong></h2>
                <h2 class="text-left"><strong>{{codigo_int}}</strong></h2>
                <div class="row">
                    <div class="col-sm-12 col-lg-4 p-3">
                        <form action="">
                            <img src="https://picsum.photos/300/300" class="img-fluid rounded-circle"
                                alt="Responsive image">
                            <div class="custom-file mt-3">
                                <input type="file" class="custom-file-input" id="customFileLang" lang="es">
                                <label class="custom-file-label" for="customFileLang">Cambiar foto</label>
                            </div>
                        </form>
                    </div>

                    <div class="col-sm-12 col-lg-8 p-3">
                        <form action="">
                
                                <div class="form-group ">
                                <label for="codigo">ID</label>
                                <input type="string" class="form-control" id="id" min="0" :placeholder="productoCargado._id" required disabled>
                                </div>
                                <div class="form-group ">
                                <label for="codigo">Codigo</label>
                                <input v-model="productoCargado.codigo" type="number" class="form-control" id="codigo"  min="0" required>
                                </div>

                                <div class="form-group">
                                    <label for="nombre">Nombre del Producto</label>
                                    <input v-model="productoCargado.producto" type="string" class="form-control" id="producto" placeholder="" required>
                                </div>
                                <div class="form-group">
                                    <label for="presentacion">Presentacion</label>
                                    <input v-model="productoCargado.presentacion" type="string" class="form-control" id="presentacion" placeholder="" >
                                </div>

                                <div class="form-group">
                                <label for="precio">Precio</label>
                                <input v-model="productoCargado.precio" type="string" class="form-control" id="precio" placeholder="$" min="0">
                                </div>
                                <div class="form-group">
                                <label for="descripcion">Descripcion</label>
                                <input v-model="productoCargado.descripcion" type="text" class="form-control" id="descripcion" placeholder=undefined style="height: 100px">
                                </div>


                                <input @click="actualizarProducto()"  class="btn btn-primary" value="Actualizar Producto">
                        </form>
                    </div>

                </div>
            </section>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            productoCargado:{
                _id:'',
                codigo: '',
                producto:'',
                presentacion:'',
                precio:'',
                descripcion:'',
                imagen:''
            },
            codigo_int: 0
        }
    },
    created(){
        this.codigo_int= this.$route.params.codigo
        this.cargarProducto(this.codigo_int)
    },
    methods: {
        cargarProducto(numero){
            axios.get(`https://tienda-ias-api.herokuapp.com/api/inventario/${numero}`)
            .then(response => {
                let status_peticion = response.status
                console.log(status_peticion)
                this.productoCargado= response.data
            })
        },
        actualizarProducto(){
            axios.put(`https://tienda-ias-api.herokuapp.com/api/inventario-update/${this.productoCargado._id}`,this.productoCargado)
            .then(response => {
                let status_peticion = response.status
                if(status_peticion === (200 || 204)) {
                    this.$swal.fire({
                        title:'Producto Modificado',
                        text: 'Se ha registrado el producto con nombre ' + this.productoCargado.producto,
                        icon:'success'
                    }).then(function(){
                        window.location.pathname= '/inventario';
                    })
                    this.productoCargado = {}
                }else {
                        this.$swal.fire({
                        title:'Producto NO modificado',
                        text:'Ocurrio un error al registrar el producto con nombre ' + this.productoCargado.producto,
                        icon:'error'
                        })
                }
            
            })
        }

    }
}
</script>