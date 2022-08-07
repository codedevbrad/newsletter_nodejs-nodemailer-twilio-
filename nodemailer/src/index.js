"use strict";
const nodemailer  = require("nodemailer");
var smtpTransport = require('nodemailer-smtp-transport');

let sender = {
    server: 'gmail' , 
  receiver: ['xxxxx@gmail.com'] ,
  auth : {
      user: 'xxxxx-email-xxxxx' ,
      pass: 'xxxxx-pass-xxxxxx'
  } , 
  email: {
      subject: 'Sending Email using Node.js[nodemailer]',
         text: 'That was easy!'
  }  
}


// async..await is not allowed in global scope, must use a wrapper
async function main({ sender , receiver , auth , email }) {
  
    // generate correct service / host based on gmail / Office365.

    var transporter = nodemailer.createTransport(smtpTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        auth: auth
    }));

    var mailOptions = {
        to: receiver ,
        subject: email.subject ,
        text: email.text
    };

    transporter.sendMail( mailOptions , function ( error , info ) {
        if (error) {
            console.log(error);
        } 
        else {
            console.log('Email sent: ' + info.response);
        }
    });  
}

main( sender ).catch(console.error);