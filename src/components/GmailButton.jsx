import React from 'react';
import '../styles/GmailButton.css'; 

const GmailButton = () => {
  const emailAddress = "arworldautomation.in@gmail.com"; 
  const subject = "Hello!"; 

  const openGmail = () => {
    window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`;
  };

  return (
    <div className="gmail-button" onClick={openGmail}>
      <img src="/assets/Social media/gmail-svgrepo-com.svg" alt="Gmail" className="gmail-icon" />
    </div>
  );
};

export default GmailButton;
