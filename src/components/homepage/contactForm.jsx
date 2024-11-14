import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Card from "../common/card";
import "./styles/contactForm.css";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'YOUR_SERVICE_ID', // Substitua pelo seu ID do serviço
                'YOUR_TEMPLATE_ID', // Substitua pelo seu ID do template
                e.target,
                'YOUR_USER_ID' // Substitua pelo seu ID do usuário do EmailJS
            )
            .then(
                (result) => {
                    alert('Email enviado com sucesso!');
                },
                (error) => {
                    alert('Erro ao enviar o email. Tente novamente mais tarde.');
                }
            );
    };

    return (
        <div className='contactForm'>
            <Card
                icon={faEnvelope}
                title="Envie uma mensagem"
                body={
                    <form onSubmit={sendEmail} >
                        <label>Nome</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />

                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />

                        <label>Mensagem</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>

                        <button type="submit">Enviar</button>
                    </form>
                }
            />
        </div>

    );
};

export default ContactForm;
