const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const { jConfig } = require('../config/config');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('../views/contact.ejs', {title: 'App con Node y Express' });
});


router.post('/email', function(req, res, next) {
  let remitente = req.body.remitente;
  let destinatario = req.body.destinatario;
  let asunto = req.body.asunto;
  let mensaje = req.body.mensaje;

  let email ={ 
    from:`${remitente}`,  //remitente
    to:`${destinatario}`,  //destinatario
    subject:`${asunto}`,  //asunto del correo
    html:` 
        <div> 
        <p>${mensaje}</p>
        </div> 
    ` 
};
console.log(email);
console.log(jConfig);
let createTransport = nodemailer.createTransport(jConfig);

createTransport.sendMail(email, function (error, info) { 
  if(error){ 
       console.log("Error al enviar email"); 
  } else{ 
       console.log("Correo enviado correctamente"); 
  } 
  createTransport.close(); 
});

});

module.exports = router;