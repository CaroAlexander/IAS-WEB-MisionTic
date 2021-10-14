import  express  from 'express'
//FUNCIONARA?????
const router = express.Router();

//Importar
import Producto from "../models/producto";

//Ruta para consultar todos los productos

router.get('/productos', async(req, res) =>{
    try{
        const productoDB = await Producto.find();
        res.json(productoDB);
    } catch (error){
        return res.status(400).json({
            mensaje: 'Se presento un error en la consulta de los productos',
            error
        })
    }
}); 

//Ruta para crear cliente
router.post('/nuevo-producto', async(req, res) =>{
    const body= req.body.data;
    //body de la peticion, un json que se envia. debe empatar con los datos del modelo
    //extrae la informacion del data que llega desde el front. Si no, no encaja en la base de datos
    // console.log(body)
    try{
        const productoDB = await Producto.create(body);
        //la insercion del cliente mediante mongoose?
        res.send(productoDB);

        }catch(error){        console.log(body)
            return res.status(400).json({
                mensaje: 'Ocurrió un error al crear el nuevo producto',
                error
            })
    }
});

//RUta para buscar producto
router.get('/inventario/:codigo', async(req, res) =>{
    //la ruta con los dos puntos, los dos puntos indican que es una variable, ya en el navegador, la peticion va reemplazada por el valor 
    const codigo = req.params.codigo
    //CON EL MISMO NOMBRE DEL CAMPO
    //async implica que es una funcion asincronica: no se queda quieta esperando la respuesta, cuando llegue, ejecuta lo que hay
    //accede a uno de los parametros de la identificacion
    try {
        const productoDB = await Producto.findOne({codigo});
        //que encuentre uno en el objeto dependiendo el parametro
        res.json(productoDB)
        //lo guarda y devuelve en productoDB
    }catch (error){
        return res.status(400).json({
            mensaje: 'Ocurrio un error al encontrar el producto',
            error
            //que envie tambien el archivo de error
        })
    }
});

//Ruta para actualizar producto
router.put('/inventario-update/:id', async(req, res) => {
    const _id = req.params.id
    //NOTESE QUE EL ID SE LLAMA ASI PARA QUE EMPATE CON LA MANERA COMO GUARDA EN LA BASE DE DATOS
    const body= req.body
    //los datos que se van a actualizar
    try{
        const productoDB = await Producto.findByIdAndUpdate(
            //funcion de moongose para encontrar y actualizar :O
            _id,
            //busca el id
            body,
            //coloca los datos que llleve
            {new: true},
            //nuevos

        );
        res.json(productoDB);

    }catch(error){
        return res.status(400).json({
            mensaje: 'Ocurrio un error al actualizar el producto',
            error
        })
    }

})

// Ruta para eliminar producto
router.delete('/inventario-eliminar/:id', async(req, res) => {
    //tipo de peticion es especifica
    const _id = req.params.id;
    try {
        const productoDB = await Producto.findByIdAndDelete({_id});
        //eliminar
        if(!productoDB){
            //validacion si no se encuentra el cliente
            return res.status(400).json({
                mensaje: 'No se encontró el producto',
                error
            })
        }
        res.json(productoDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrió un error al eliminar el producto',
            error
        })
    }
});
//exportar config

module.exports= router;