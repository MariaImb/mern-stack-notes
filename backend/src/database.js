//importo el modulo
const mongoose = require('mongoose');

// voy a importar el modulo connect que nos permite conectarnos a un servidor de mongodb, y para conectarse utiliza el protocolo mongodb y luego la direccion en donde estÉ. Para acortar la cadena de conexion lo guardo en una constante URI. A traves del protocolo mongo db quiero que se conecte al localhost donde va a haber una base de datos con el nombre mernstack. Con este codigo se crea a su vez la base de datos con ese nombre.


const URI = process.env.MONGODB_URI 
    ? process.env.MONGODB_URI
    : 'mongodb://localhost/databasetest';

//Dentro de connect le voy a dar ciertas opciones de conexion, las bibliotecas que quiero que utilice internamente para que no de errores y que mongoose se pueda conectar

mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology:true
});

//cuando se conecte quiero escuchar esa cadena de conexion. En una constante llamada connection guardo la propiedad mongoose.connection y cuando la conexion sea abierta quiero que muestre algo por consola
const connection = mongoose.connection;

connection.once('open', () => {
    console.log('DB is connected');
})