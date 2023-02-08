// ? Aquí mi configuración

// * nodemailer
let jConfig = {
    "host":"sandbox.smtp.mailtrap.io", 
   "port":"2525", 
  "auth":{ 
          "user":"25fb70ece43e27", 
         "pass":"a6db50a73091c3" 
    }
};
// let jConfig = {
//     "host":"tu-host", 
//    "port":"tu-port", 
//   "auth":{ 
//           "user":"tu-user", 
//          "pass":"tu-pass" 
//     }
// };
// ? host, hace referencia al nombre o IP de tu servidor SMTP
// ? port, puerto asignado por el servidor SMTP para el envió de correos
// ? secure, esto se entiende mejor de la siguiente manera si usas https su valor debe ser true, de lo contrario false
// ? auth, es un JSON con los datos de autentificación  al servidor SMTP
// ? type, escribe login para acceder al servidor SMTP
// ? user, usuario registrado
// ? pass, contraseña del usuario registrado

module.exports = {
    jConfig: jConfig,
}