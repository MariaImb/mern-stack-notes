
const express = require('express'); //importo el modulo express
const cors = require('cors'); //importo el modulo cors
const app = express(); //lo ejecuto

//settings
app.set('port', process.env.PORT || 4000);


//middlewares
app.use(cors());
app.use(express.json());

//routes
app.use('/api/users', require('./routes/users'))
app.use('/api/notes', require('./routes/notes'))

module.exports = app; // lo exporto