import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
	
const app = express();
//crea la app en express

//requerir body-parser?
const bp = require('body-parser')

 // Conexión base de datos
const mongoose = require('mongoose');
//se requiere moongose
const uri = 'mongodb://localhost:27017/IASWEB';
//direccion de la cadena de conexion para conectarse con la base de datos:
//-con mongodb, la direccion especifica de la base de datos
//-el puerto
//-Nombre de base de datos
const options = {useNewUrlParser: true, useUnifiedTopology: true};
//opciones de configuracion de la conexion
	
mongoose.connect(uri, options).then(
	//se pasa conexion, opciones
	//Luego viene una promesa
    () => { console.log('Conectado a DB') },
    err => { console.log(err) }
	//la especificacion de que pasa respecto a los requerimientos
);



// Middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

 //usa cada uno de los elementos importados
	
// Rutas
//Ruta base de la APP
app.get('/', function (req, res) {
     res.send('Hola Mundo Mundial!');
    });

//apunte al sistema de rutas
app.use('/api', require('./routes/producto'));
//apunta a que despues del puerto, siempre va a arrancar en api
//apunta a que escuche todas las rutas que esten especificadas en ese archivo
	
// app.use('/api', require('./routes/cliente'));




// Middleware para Vue.js router modo history
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));
 //Config puerto
app.set('puerto', process.env.PORT || 3000);
 //Que escuche ese puerto
app.listen(app.get('puerto'), function () {
    console.log('La aplicación corre en el puerto '+ app.get('puerto'));
});

