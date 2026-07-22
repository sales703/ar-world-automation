import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

const Contact = () => {
    // ... (rest of your component code is unchanged and correct)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        requirements: '',
        attachment: null,
    });
    const [status, setStatus] = useState('');
    const [fileStatus, setFileStatus] = useState('No file chosen');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData(prevState => ({
            ...prevState,
            attachment: file,
        }));
        setFileStatus(file ? file.name : 'No file chosen');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        try {
            let attachmentBase64 = null;
            if (formData.attachment) {
                const reader = new FileReader();
                await new Promise((resolve) => {
                    reader.onload = (event) => {
                        attachmentBase64 = event.target.result.split(',')[1];
                        resolve();
                    };
                    reader.readAsDataURL(formData.attachment);
                });
            }

            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                message: formData.requirements,
                attachment: attachmentBase64 ? {
                    name: formData.attachment.name,
                    data: attachmentBase64
                } : null,
            };

            const serviceID = 'YOUR_SERVICE_ID';
            const templateID = 'YOUR_TEMPLATE_ID';
            const publicKey = 'YOUR_PUBLIC_KEY';

            await emailjs.send(serviceID, templateID, templateParams, publicKey);
            
            setStatus('Message sent successfully! We will get back to you shortly.');
            setFormData({
                name: '',
                email: '',
                requirements: '',
                attachment: null,
            });
            setFileStatus('No file chosen');

        } catch (error) {
            console.error('Failed to send email:', error);
            setStatus('Failed to send message. Please try again.');
        }
    };
    // ... (rest of the component's JSX is unchanged and correct)
    return (
        <div className="contact-page">
            <section className="contact-hero">
                <video autoPlay loop muted className="hero-video">
                    {/* Your video path is correct. The issue is the video file itself. */}
                    <source src="/assets/Contact.mp4" type="video/mp4"/>
                    {/* Add a WebM source for broader support if you have one. */}
                    {/* <source src="/assets/contact.webm" type="video/webm"/> */}
                    Your browser does not support the video tag.
                </video>
                <div className="hero-overlay"></div>
                <div className="hero-text-container">
                    <h1>Contact Us</h1>
                    <p>Get in touch with us for your industrial automation needs. We are here to help.</p>
                </div>
            </section>

            <div className="contact-content-wrapper">
                <section className="contact-details">
                    <h2>We're Here When You Need Us</h2>
                    <div className="contact-methods">
                        <div className="contact-method">
                            <h3>General Inquiries</h3>
                            <p>Email: <a href="mailto:arworldautomation.in@gmail.com">arworldautomation.in@gmail.com</a></p>
                            <p>Email: <a href="mailto:sales@arworldautomation.com">sales@arworldautomation.com</a></p>
                            <p>Mobile: +91 92087 75450</p>
                        </div>
                        
                    </div>
                </section>

                <section className="office-locations">
                    <h2>Office Locations</h2>
                    <div className="locations-grid">
                        <div className="location-card">
                            <h3>India</h3>
                            <p>AR World Automation Ltd.</p>
                            <address>
                                Sector-2, Near Metro Station 15 &amp; 16,<br />
                                Noida, Gautam Buddha Nagar,<br />
                                Uttar Pradesh 201301
                            </address>
                            <p>Relationship Manager: Rupali</p>
                            <p>Phone: +91 92087 75450</p>
                        </div>
                        <div className="location-card">
                            <h3>Map</h3>
                            <div className="map-container">
                                <iframe
                                    src="https://www.google.com/maps?q=Sector%202%20Noida%20Near%20Metro%20Station%2015%2016%20Uttar%20Pradesh%20201301&output=embed"
                                    width="100%"
                                    height="300"
                                    style={{ border: '0' }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Contact;