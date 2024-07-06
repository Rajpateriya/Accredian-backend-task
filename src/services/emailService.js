const nodemailer = require('nodemailer');

const sendReferralEmail = async (referrerEmail, refereeEmail) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

// const transporter = nodemailer.createTransport({
//   host: 'smtp.ethereal.email',
//   port: 587,
//   auth: {
//       user: 'waino55@ethereal.email',
//       pass: 'cbC5WyfrnWpWqxeK3r'
//   }
// });

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: refereeEmail,
    subject: 'You have been referred!',
    text: `Hello! You have been referred by ${referrerEmail}. Check out this great course!`,
  };

  await transporter.sendMail(mailOptions);
  console.log("message sent" )
  
};


module.exports = {
  sendReferralEmail,
};
