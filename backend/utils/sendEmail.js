import nodemailer from 'nodemailer';

const sendEmail = async (to, subject, text) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_FROM,        // your gmail
        pass: process.env.EMAIL_PASSWORD     // your app password (not your Gmail login)
      }
    });

    const mailOptions = {
      from: `"BookStore App" <${process.env.EMAIL_FROM}>`,
      to,
      subject,
      text
    };

    await transporter.sendMail(mailOptions);
    console.log('✅ Email sent to:', to);
  } catch (error) {
    console.error('❌ Error sending email:', error.message);
    throw new Error('Failed to send email');
  }
};

export default sendEmail;
