import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

// Load environment variables
require('dotenv').config();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Nodemailer transport settings using environment variables
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Use environment variable
        pass: process.env.EMAIL_PASS, // Use environment variable
      },
    });

    const mailOptions = {
      from: email,
      to: 'jus.buckingham@gmail.com',
      subject: `Contact Form Submission from ${name}`,
      text: message,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error: any) {
      console.error('Error sending email:', error); // Log the error for debugging
      res.status(500).json({ message: 'Failed to send email', error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
