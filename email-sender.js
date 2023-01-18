var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'elfekihnahed@gmail.com',
    pass: ''
  }
});

var mailOptions = {
  from: 'elfekihnahed@gmail.com',
  to: 'ste.froidplus@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'hello from node!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});