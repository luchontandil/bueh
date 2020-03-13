module.exports = (app) => {
    const contact = require('../controllers/contact.controller.js');

    app.use(function (req, res, next) {
        // Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', '*');
        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', true);
        // Pass to next layer of middleware
        next();
    });

    // Create a new puntuaciones
    app.post('/contacto', contact.create);

    // Retrieve all puntuaciones
    app.get('/contactos', contact.findAll);

    // // Retrieve all puntuaciones dado un ip
    // app.post('/puntuacionesip', puntuaciones.findAllip);

    // // Retrieve a single puntuaciones with puntuacionId
    // app.post('/puntuacion', puntuaciones.findOne);

    // app.post('/puntuacionesFalla', puntuaciones.getPuntuaciones);


    //DELETE DE TODO LA BD
    app.delete('/contactos', contact.delete);

    // Add headers

}
