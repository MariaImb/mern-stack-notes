
const express = require('express'); //importo el modulo express
const cors = require('cors'); //importo el modulo cors
const app = express(); //lo ejecuto

//settings
app.set('port', process.env.PORT || 4000);


//middlewares
app.use(cors());
app.use(express.json());

//routes
app.get('/api/users', (req,res) => res.send('User Routes'))
app.get('/api/notes', (req,res) => res.send('Notes Routes'))

module.exports = app; // lo exporto