<template>
<div class="contenido">
    <router-view/>
    <div class="container">
        <section>
            <div class="row">
                <div class="col-8 mx-auto">
                    <form action="profile.html">
                        <div class="form-group row">
                            <label for="user" class="col-sm-2 col-form-label">Nombre de usuario:</label>
                            <div class="col-sm-10">
                                <input v-model="usuario" type="text" class="form-control" id="user" placeholder="">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="password" class="col-sm-2 col-form-label">Contraseña:</label>
                            <div class="col-sm-10">
                                <input v-model="contraseña" type="password" class="form-control" id="password" placeholder="">
                            </div>
                        </div>
                         <div class="form-group row">
                            <div class="col-sm-10 d-flex">
                               <router-link :to="{name:'inventario'}"> <button type="submit" class="btn btn-primary mx-auto">Confirmar</button></router-link>
                            </div> 
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </div>
</div>

</template>
<script>
export default {
    name: 'login',
    usuario: '',
    contraseña:'',
    components:{

    }
}
</script>