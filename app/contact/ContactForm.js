"use client"; // Ajoutez cette directive en haut du fichier
import Layout from "../../components/Layout";
import "../../app/globals.css";
// components/ContactForm.js
import { useState } from 'react';

export default function ContactForm() {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message envoyé avec succès !');
        setFormData({ name: '', email: '', message: '' }); // Réinitialiser le formulaire
      } else {
        setStatus('Une erreur s\'est produite. Veuillez réessayer.');
      }
    } catch (error) {
      setStatus('Une erreur s\'est produite. Veuillez réessayer.');
    }
  };

  return (
    
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nom :</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email :</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="message">Message :</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <div>Tel: +33 07 52 88 00 95</div>
      <div>Email: ngue.ntamak@gmail.com</div>
      <div><button type="submit" className="mt-6 bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-6 rounded-lg transition">Send</button></div>
      
      {status && <p>{status}</p>}
    </form>
    
  );
}