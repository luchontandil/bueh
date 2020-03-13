const Contact = require('../models/contact.model.js');

// Obtener todos los contactos
exports.findAll = (req,res) => {
    Contact.find().then(contactos=>{
        res.send(contactos);
    }).catch(err=>{
        res.status(500).send({
            message: err.message || " Something when wrong"
        });
    });

};


// Crear y salvar
exports.create = (req,res)=>{

    // Validamos el Contacto
    if (!req.body){
        console.log(req.body);
        return res.status(400).send({
           message:"Contacto Vacio..."
        });
    }else{
        const contacto = new Contact({
            name: req.body.name|| "Anonimo",
            email: req.body.email|| "-",
            number: req.body.number|| "-"
        })
    
        contacto.save().then(data =>{
            res.send(data);
            
        }).catch(err => {
            res.status(500).send({
                message: err.message|| "Something was wrong while creating contact"
            });
        });
    }
    
};

exports.delete = (req,res) => {
    Contact.remove()
    .then(data =>{
        res.send(data);
    })
    .catch(err=>{
        res.status(500).send({
            message: err.message || " Algo fue mal mientras borraba"
        });
    });

};
