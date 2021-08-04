require('dotenv').config();

const app = require('./app');
require('./database');

//Inicio el servidor

async function main() {
    await app.listen(app.get('port'));
    console.log('Server on port', app.get('port'));
}

//le indico que ejecute main

main();