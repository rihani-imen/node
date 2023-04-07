const nodemailer = require("nodemailer");

// Créer un transporteur SMTP
let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "votre_email@gmail.com",
    pass: "votre_mot_de_passe",
  },
});


let mailOptions = {
  from: "votre_email@gmail.com",
  to: "destinataire@example.com",
  subject: "Test d'envoi d'e-mail avec Node.js",
  text: "Ceci est un test d'envoi d'e-mail avec Node.js.",
};


transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log("E-mail envoyé : " + info.response);
  }
});
