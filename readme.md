
## simple nodemailer service.

- requires username and password.
- requires an app generated password if two-factor authentication is required.
    
### things to do in nodemailer.
* setup for gmail / 365

### generating an app password if 2-factor auth is enabled.
If you have enabled 2-factor authentication on your Google account you can't use your regular password to access Gmail programmatically. You need to generate an app-specific password and use that in place of your actual password.

### Steps:
Log in to your Google account Go to My Account > Sign-in & Security > App Passwords (Sign in again to confirm it's you) Scroll down to Select App (in the Password & sign-in method box) and choose Other (custom name) Give this app password a name, e.g. "nodemailer" Choose Generate Copy the long generated password and paste it into your Node.js script instead of your actual Gmail password.

### sender object for email.
```javascript
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
```

## twilio sendgrid

https://app.sendgrid.com/settings/sender_auth/senders/new

- you manually create single-sender verification.
    - the email address then needs to confirm being a new sender.

. . .
