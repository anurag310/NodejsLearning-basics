import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  // host: 'smtp.gmail.com',
  // port: 465, // Use port 465 for SSL
  // secure: true,
  service:'gmail',
  auth: {
    user: 'basuanurag550@gmail.com',
    pass: 'Anurag#70', // Use the App Password you generated
  },
});

// Verify the connection
transporter.verify()
  .then(() => {
    console.log('SMTP server connection verified');
    sendEmail();
  })
  .catch(error => {
    console.error('Error verifying SMTP connection:', error);
  });

function sendEmail() {
  const mailOptions = {
    from: 'basuanurag550@gmail.com',
    to: 'anuragbasu402@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };

  transporter.sendMail(mailOptions)
    .then(info => {
      console.log('Email sent: ' + info.response);
    })
    .catch(error => {
      console.error('Error sending email:', error);
    });
}
