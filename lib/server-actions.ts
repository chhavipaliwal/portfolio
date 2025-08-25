'use server';

import { MailOptions } from 'nodemailer/lib/json-transport';
import { transporter } from './nodemailer';

export const sendMail = async ({
  to,
  subject,
  message,
  title,
  from,
}: {
  to?: string;
  subject: string;
  message: string;
  from?: string;
  title?: string;
}) => {
  const mailOptions: MailOptions = {
    from: {
      name: title || 'Portfolio - Chhavi Paliwal',
      address: from || '',
    },
    to: to || process.env.GMAIL,
    subject: subject,
    text: message,
  };
  try {
    return await transporter.sendMail(mailOptions).then(() => {
      console.log('Email sent');
    });
  } catch (error) {
    console.error('Failed to send email', error);
    return new Error('Failed to send email');
  }
};
