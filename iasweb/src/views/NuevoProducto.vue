<template>
    <div class="contenido">
        <div class=" bg-light rounded p-3 my-3">
            <section>
                <h2 class="text-left"><strong>Cree un nuevo producto</strong></h2>
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
                                <label for="codigo">Codigo</label>
                                <input v-model="producto.codigo" type="number" class="form-control" id="codigo" placeholder="" min="0" required>
                                </div>

                                <div class="form-group">
                                    <label for="nombre">Nombre del Producto</label>
                                    <input v-model="producto.producto" type="string" class="form-control" id="producto" placeholder="" required>
                                </div>
                                <div class="form-group">
                                    <label for="presentacion">Presentacion</label>
                                    <input v-model="producto.presentacion" type="string" class="form-control" id="presentacion" placeholder="" >
                                </div>

                                <div class="form-group">
                                <label for="precio">Precio</label>
                                <input v-model="producto.precio" type="string" class="form-control" id="precio" min="0">
                                </div>
                                <div class="form-group">
                                <label for="descripcion">Descripcion</label>
                                <input v-model="producto.descripcion" type="text" class="form-control" id="descripcion" placeholder=undefined style="height: 100px">
                                </div>


                                <input @click="registrarProducto()"  class="btn btn-primary" value="Añadir Producto">
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
            producto:{
                codigo: '',
                producto:'',
                presentacion:'',
                precio:'',
                descripcion:'',
                imagen:''
            }
        }
    },
    created(){
        this.producto.precio= "$"
    },
    methods: {
        registrarProducto(){
            axios.post('https://tienda-ias-api.herokuapp.com/api/nuevo-producto',
            {
                data: this.producto
            })
            .then(response => {
                let status_peticion = response.status
                let mensaje = response.data

                if(status_peticion === 200) {
                    this.$swal.fire({
                        title: 'Producto registrado',
                        text: 'Se ha registrado el producto con nombre ' + this.producto.producto,
                        icon: 'success'
                    }).then(function(){
                        window.location.pathname= '/inventario';
                    })
                    this.producto = {}

                }else {
                        this.$swal.fire({
                        title:'Producto NO registrado',
                        text:'Ocurrio un error al registrar el producto con nombre ' + this.producto.producto,
                        icon:'error'
                        })
                }
                console.log(mensaje)
            })
        }
    }
}
</script>