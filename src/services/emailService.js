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
    subject: 'You have been referred by your friend !',
    text: `Hello! You have been referred by ${referrerEmail}. 
    This email is for general purpose of testing the gmail service !
    This is for general fun!!
    thanks........
    Have a great day..`,
  };

  await transporter.sendMail(mailOptions);
  console.log("message sent" )
  
};


module.exports = {
  sendReferralEmail,
};
