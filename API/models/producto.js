import  mongoose  from 'mongoose';
const Schema = mongoose.Schema;

const productoSchema = new Schema(
    {   
        codigo: {type: Number, required:[true, 'Codigo requerido']},
        producto: {type: String, required:[true, 'Producto requerido']},
        presentacion: {type: String, default: 'Unidad'},
        precio: {type: String, default: '$0'},
        descripcion: {type: String, default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
        imagen: String
    }
)


//modelo

const Producto = mongoose.model('Producto',productoSchema);
//nombre y nombre del modelo

export default Producto;