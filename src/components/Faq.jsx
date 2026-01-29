import React, { useState } from 'react';
import '../styles/Faq.css';

const faqData = [
  {
    question: 'What warranty do you offer on your parts?',
    answer: 'A minimum of 12 months warranty is applicable for all new, repaired, or reconditioned units sold.',
  },
  {
    question: 'What is the return policy?',
    answer: 'Returns must be reported within 7 days of delivery and received by AR World Automation for inspection within 14 days from the date of receipt. Returned items must be in their original packaging, unused, and in a re-sellable condition.',
  },
  {
    question: 'How to get a quotation?',
    answer: 'You can call the sales team directly, use the "Enquire Now" option on the website, or email them at rupaliuwa@outlook.com.',
  },
  {
    question: 'How to place an order?',
    answer: 'You can email the sales team or call them directly.',
  },
  {
    question: 'When will the order be shipped?',
    answer: 'The delivery time is mentioned on the quote or by the salesperson. Once payment is made, the parts are processed for shipment. Delivery can range from 24 hours to 14 days maximum.',
  },
  {
    question: 'Which manufacturers do you deal with?',
    answer: 'We deal with more than 20 brands, and the list is available on our website under the "Products" section.',
  },
  {
    question: 'Do you deal in obsolete parts?',
    answer: 'Yes, we specialize in dealing with obsolete and hard-to-find parts.',
  },
  {
    question: 'How will orders be shipped?',
    answer: 'We work with various carriers, including FedEx Express, FedEx Priority, FedEx Standard, DHL Express, UPS Express Saver, and UPS Express.',
  },
  {
    question: 'By which payment channels can payments be made?',
    answer: 'Payment can be made through PayPal, TT transfer, Cheque, or QR code payment via the "Scan & Pay" option on our website.',
  },
  {
    question: 'How will the invoice for an order be provided?',
    answer: 'The invoice will be sent to the client\'s provided email address once the order is confirmed.',
  },
  {
    question: 'How to check the tracking status of an order?',
    answer: 'The lead time is mentioned on the invoice, and it is counted from the time the "Po ID" is issued.',
  },
  {
    question: 'Why should I consider an obsolete part?',
    answer: 'Purchasing an obsolete part is a cost-effective alternative to buying a new one, as it is fully functional and comes with a warranty.',
  },
  {
    question: 'If something goes wrong, who can I get in touch with?',
    answer: 'Our customer support team can be contacted with any issues or inquiries. The direct contact information for the Customer Support Executive is at the bottom of the order confirmation.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-page">
      <section className="faq-hero">
        <h1>Frequently Asked Questions</h1>
        <p>Find answers to common questions about our products, services, and policies.</p>
      </section>

      <div className="faq-container">
        {faqData.map((item, index) => (
          <div className="faq-item" key={index}>
            <button 
              className={`faq-question ${openIndex === index ? 'open' : ''}`} 
              onClick={() => toggleFAQ(index)}
            >
              {item.question}
              <span className="faq-toggle-icon">{openIndex === index ? '-' : '+'}</span>
            </button>
            <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;