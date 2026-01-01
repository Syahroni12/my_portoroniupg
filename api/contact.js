import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Setup Cors manual agar aman (opsional, tapi bagus)
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle request OPTIONS (untuk preflight check browser)
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Hanya memproses method POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, email, message } = req.body;

  // Validasi input
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Setup Transporter Gmail
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // Variabel dari Vercel
      pass: process.env.EMAIL_PASS, // Variabel dari Vercel
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER, // Kirim ke email kamu
      replyTo: email,
      subject: `Pesan Portofolio dari ${name}`,
      text: message,
      html: `
        <h3>Pesan Baru dari Website</h3>
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Pesan:</strong></p>
        <p>${message}</p>
      `,
    });

    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email Error:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}