import nodemailer from 'nodemailer';
const email = process.env.GMAIL;
const password = process.env.GMAIL_PASSWORD;

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: email,
    pass: password,
  },
});
