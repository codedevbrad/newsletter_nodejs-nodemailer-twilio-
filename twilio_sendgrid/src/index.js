const client = require('@sendgrid/mail');

client.setApiKey( process.env.sendgrid_key );

const msg = {
    to: 'brad12468@gmail.com', // Change to your recipient
    from: 'codedevbrad@gmail.com', // Change to your verified sender
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}

client
  .send( msg )
  .then(() => console.log('Mail sent successfully'))
  .catch(error => {
    console.error(error);
  });