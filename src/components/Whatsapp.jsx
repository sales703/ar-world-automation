import React from "react";
import "../styles/Whatsapp.css";

const WhatsappButton = () => {
  const phoneNumber = "919208775450"; // replace with your WhatsApp number
  const message = "Hello, I want to chat with you!"; // default message

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="whatsapp-button" onClick={openWhatsApp}>
      <img
        src="/assets/Social media/whatsapp-svgrepo-com.svg"
        alt="WhatsApp"
        className="whatsapp-icon"
      />
    </div>
  );
};

export default WhatsappButton;
