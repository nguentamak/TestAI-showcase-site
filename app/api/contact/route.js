// app/api/contact/route.js
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    // Validation simple
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Tous les champs sont obligatoires.' },
        { status: 400 }
      );
    }

    // Configurer Nodemailer avec Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Votre adresse Gmail
        pass: process.env.EMAIL_APP_PASSWORD, // Votre clé d'application
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER, // Votre adresse email
      subject: `Nouveau message de ${name}`,
      text: message,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Message envoyé avec succès !' },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Une erreur s\'est produite lors de l\'envoi du message.' },
      { status: 500 }
    );
  }
}