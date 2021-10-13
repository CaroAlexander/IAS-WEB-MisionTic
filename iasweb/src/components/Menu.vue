<template>
    <div class="container col-md-12">
        <nav class="navbar navbar-expand-lg navbar-light">
            <a class="navbar-brand">
                <router-link :to="{name: 'home'}"><h1 class="font-weight-bold">*logo*-IAS</h1></router-link>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto"></ul>
                <ul class="navbar-nav mr auto rounded-pill font-weight-bold bg-gray px-2">
                    <li class="nav-item">
                        <a class="nav-link" href="#"> <i class="fas fa-user-plus"></i> Registro</a>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name:'login'}"><a class="nav-link"> <i class="fas fa-user"></i> Ingreso</a></router-link>
                    </li>
                </ul>

            </div>
        </nav>


        <nav class="navbar navbar-expand-lg navbar-light pb-lg-3">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto rounded-pill font-weight-bold bg-gray px-3">
                    <li class="nav-item active">
                       <router-link :to="{name: 'home'}"> <a class="nav-link">Tienda<span class="sr-only">(current)</span></a></router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name: 'quienes'}"><a class="nav-link">Quienes Somos</a></router-link>
                    </li>
            </ul>
                
            </div>
        </nav>
        <hr>
        <router-view/>
    </div>

</template>
<script>
export default {
    name: 'menu'
}
</script>
<style scoped>

</style>