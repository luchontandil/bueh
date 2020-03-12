const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = 8800;
// Nos conectaremos a la base de datos
const dbConfig = require('./config/database.config');
const mongoose = require('mongoose');


// Utilizaremos body-parser para "parsear lo que nos pidan"
app.use(bodyParser.urlencoded({
    extended:true
}));

//Parsearemos los jsons
app.use(bodyParser.json());

mongoose.Promise = global.Promise;

// Conectando en si mismo
mongoose.connect(dbConfig.url,{
    useNewUrlParser:true}).then(()=>{
        console.log(" * Cargada y preparada ");
    }).catch(err => {
        console.log(" Algo ha pasado... saliendo : ",err);
        process.exit();
    });

// Vamos a definir un "punto de inicio"
app.get('/api/',(req,res)=>{
    res.json({"message":"API de tec"});
});

// Paginas publicas (estaticas)
app.use(express.static(path.join(__dirname, 'public')));


// Require Contactos routes
require('./app/routes/contact.routes.js')(app);


// Escuchemos en un puerto
app.listen(port,() => {
    console.log(`* UP and Running en http://localhost:${port}`);
});


// const express = require('express')
// const app = express()
// const mongoose = require('mongoose')

// mongoose.connect(dbConfig.url, { useNewUrlParser: true })
// const db = mongoose.connection
// db.on('error', (error) => console.error(error))
// db.once('open', () => console.log('connected to database'))

// app.listen(3000, () => console.log('server started'))