<template>
    <div class="contenido">
        <div class="row">
            <div class="col-sm-12  col-lg-2 ml-lg-3 my-sm-3 bg-light p-3 rounded">
                <router-link :to="{name: 'nuevoproducto'}"><a class="btn btn-success w-100 my-2">Añadir Producto</a></router-link>
                <router-link :to="{name: 'inventario'}"><a href="inventario.html" class="btn btn-info w-100 my-2">Inventario</a></router-link>
                <!-- <a href="" class="btn btn-secondary w-100 my-2">Lista de ventas</a>    -->
            </div>
            <div class="col-sm-12  col-lg-9 ml-lg-3 my-sm-3 bg-light p-3 rounded">
                        <!-- <table id="products"
                            class="table table-striped table-hover table-bordered table-responsive-sm text-center"
                            style="width:100%">
                            <thead>
                                <tr>
                                    <th>Imagen</th>
                                    <th>Codigo</th>
                                    <th>Nombre</th>
                                    <th>Presentación</th>
                                    <th>Precio</th>
                                    <th>Descripción</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody v-for="producto in productos" :key="producto.id">
                                <tr>
                                    <td><img class="card-img-top" src="https://picsum.photos/200/200" alt="Card image cap"></td>
                                    <td>{{producto.codigo}}</td>
                                    <td>{{producto.producto}}</td>
                                    <td>{{producto.presentacion}}</td>
                                    <td>{{producto.precio}}</td>
                                    <td>{{producto.descripcion}}</td>
                                    <td>
                                        <a href="" class="btn btn-warning"><i class="fas fa-edit"></i></a>
                                        <a href="" class="btn btn-danger"><i class="fas fa-trash"></i></a>
                                    </td>
                                </tr>
                            </tbody> -->
                           
                        <!-- </table> -->
                        <label>Busqueda</label>
                        <input v-model="filters.cosas.value" />

                        <VTable :data="productos"
                        :filters="filters"
                        :page-size="10"
                        v-model:currentPage="currentPage"
                        @totalPagesChanged="totalPages= $event"
                        class="table table-striped table-hover table-bordered table-responsive-sm text-center"
                            style="width:100%">
                            <template #head>
                                <tr>
                                    <th>Imagen</th>
                                    <th>Codigo</th>
                                    <th>Nombre</th>
                                    <th>Presentación</th>
                                    <th>Precio</th>
                                    <th>Descripción</th>
                                    <th>Acciones</th>
                                </tr>
                            </template>
                            <template #body="{rows}" >
                                <tr v-for="row in rows" :key="row.id">
                                    <td><img class="card-img-top" src="https://picsum.photos/200/200" alt="Card image cap"></td>
                                    <td>{{row.codigo}}</td>
                                    <td>{{row.producto}}</td>
                                    <td>{{row.presentacion}}</td>
                                    <td>{{row.precio}}</td>
                                    <td>{{row.descripcion}}</td>
                                    <td>
                                        <a @click="irEditar(row)" class="btn btn-warning"><i class="fas fa-edit"></i></a>
                                        <a @click="eliminarProducto(row)" class="btn btn-danger"><i class="fas fa-trash"></i></a>
                                    </td>
                                </tr>
                            </template>
                        </Vtable>
                        <VTPagination
                           v-model:currentPage="currentPage"
                            :total-pages="totalPages"
                            :boundary-links="true"
                        />
                    </div>

        </div>
    </div>    
    

</template>

<script>
import axios from 'axios'

export default {
    name: 'DataTable',

    data: () =>{
        return {
            productos: [],
            codigoEnviar: 0,
            filters:{
                cosas :{value:'', keys: ['codigo','producto','presentacion','precio']}
            },
            totalPages: 1,
            currentPage: 1
            
        }
    },
    created(){
        this.cargarProductos()
    
    },
    mounted(){
        // eslint-disable-next-line no-undef
    //     $.ajax({
    //         type: "GET",
    //         url: 'http://localhost:3000/api/productos',
    //         dataType: 'json',
    //         success: function(obj){
    //         // eslint-disable-next-line no-undef
    //             $('#products').DataTable({
    //                 data: obj,
    //                 columns:[
    //                 { title: 'Imagen', render: function(){
    //                    return '<img src="https://picsum.photos/200/200" width="100" height="100"/>';
    //                 } },
    //                 { data: 'codigo', title: 'Codigo' },
    //                 { data: 'producto', title: 'Producto' },
    //                 { data: 'presentacion', title: 'Presentacion' },
    //                 { data: 'precio', title: 'Precio' },
    //                 { data: 'descripcion', title: 'Descripción' },
    //                 {title: 'Editar', 
    //                 render: function(){
    //                     return '<a class=" edit btn btn-warning"><i class="fas fa-edit"></i></a>';
    //                 } },
    //                 {title: 'Borrar',
    //                 render: function(){
    //                     return '<a class="btn btn-danger"><i class="fas fa-trash"></i></a>';
    //                 }},
    //                 ],
    //                 language: {
    //                     "decimal": "",
    //                     "emptyTable": "No hay información",
    //                     "info": "Mostrando _START_ a _END_ de _TOTAL_ Entradas",
    //                     "infoEmpty": "Mostrando 0 to 0 of 0 Entradas",
    //                     "infoFiltered": "(Filtrado de _MAX_ total entradas)",
    //                     "infoPostFix": "",
    //                     "thousands": ",",
    //                     "lengthMenu": "Mostrar _MENU_ Entradas",
    //                     "loadingRecords": "Cargando...",
    //                     "processing": "Procesando...",
    //                     "search": "Buscar:",
    //                     "zeroRecords": "Sin resultados encontrados",
    //                     "paginate": {
    //                         "first": "Primero",
    //                         "last": "Ultimo",
    //                         "next": "Siguiente",
    //                         "previous": "Anterior"
    //                     }},
    //             });
            
    //         },
    //         error: function(obj){
    //             alert(obj.msg)
    //         }

                
    // })
    
    },
    methods: {
        cargarProductos(){
            axios.get('http://localhost:3000/api/productos')
            .then(response => {
                let status_peticion = response.status
                console.log(status_peticion)
                this.productos= response.data
            })
        },
        buscarCodigo(){
            axios.get('http://localhost:3000/api/inventario/:codigo')
            .then(response => {
                let status_peticion = response.status
                console.log(status_peticion)
                this.codigoEnviar= response.data
            })
        },
        irEditar(row) {
            //eslint-disable-next-line no-undef
            let ruta = `/editarproducto/${row.codigo}`
            this.$router.push(ruta)
        },
        eliminarProducto (row) {
            this.$swal.fire({
                title: '¿Está seguro?',
                text: `Va a eliminar el producto ${row.producto} ¡Esta operación no se puede deshacer!`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3085d6',
                confirmButtonText: 'Sí, eliminar'
                }).then((result) => {
                    if (result.isConfirmed) {
                        axios.delete(`http://localhost:3000/api/inventario-eliminar/${row._id}`)
                            .then(response => {
                                let status_peticion = response.status
                                if (status_peticion === (200||204)) {
                                    this.$swal.fire({
                                       title: 'Producto eliminado',
                                        text: `Se ha eliminado el producto con codigo ${row.codigo}  y nombre ${row.producto}`,
                                        icon: 'success'
                                    }).then(function(){
                                    window.location.pathname= '/inventario';
                                    })
                                    this.cliente = {}
                                } else {
                                    this.$swal.fire({
                                       title: 'Producto NO eliminado',
                                        text:`Ocurrió un error al eliminar el producto con codigo ${row.codigo}`,
                                        icon: 'error'
                                    })
                                }
                            })
                    }
                })
        }
    }
}

</script>