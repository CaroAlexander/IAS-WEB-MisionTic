<template>
    <div class="container bg-light rounded p-5 my-3">
        <section>
            <h2 class="text-center"><strong>Jonas1234</strong></h2>
            <div class="row">
                <div class="col-sm-12 col-lg-4">
                    <form action="">
                        <img src="https://picsum.photos/300/300" class="img-fluid rounded-circle"
                            alt="Responsive image">
                        <div class="custom-file mt-3">
                            <input type="file" class="custom-file-input" id="customFileLang" lang="es">
                            <label class="custom-file-label" for="customFileLang">Cambiar foto</label>
                        </div>
                    </form>
                </div>

                <div class="col-sm-12 col-lg-4">
                    <form action="">
                        <div class="form-group">
                            <label for="name">Nombre</label>
                            <input type="text" class="form-control" id="name" placeholder="" value="Pepito Perez">
                        </div>

                        <div class="form-group">
                            <label for="sexo">Sexo</label>
                            <select class="form-control" id="sexo">
                                <option>Masculino</option>
                                <option>Femenino</option>                                
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="age">Edad</label>
                            <input type="number" class="form-control" id="age" placeholder="" value="32">
                        </div>

                        <div class="form-group">
                            <label for="prefession">Profesión</label>
                            <input type="text" class="form-control" id="profession" placeholder="" value="Programador">
                        </div>

                        <button type="submit" class="btn btn-primary">Confirmar cambios</button>
                    </form>
                </div>


                <div class="col-sm-12  col-lg-4 mt-4">
                    <h5>Cambiar Contraseña</h5>
                    <hr>
                    <form action="">
                        <div class="form-group">
                            <label for="password">Contraseña anterior</label>
                            <input type="password" class="form-control" id="password" placeholder="">
                        </div>

                        <div class="form-group">
                            <label for="password-new">Contraseña nueva</label>
                            <input type="password" class="form-control" id="password-new" placeholder="">
                        </div>

                        <div class="form-group">
                            <label for="password-repeat">Repetir Contraseña Nueva</label>
                            <input type="password" class="form-control" id="password-repeat" placeholder="">
                        </div>
                        <button type="submit" class="btn btn-primary">Confirmar cambio de Contraseña</button>
                    </form>
                </div>
            </div>
        </section>
    </div>
</template>