import React, { useState } from "react";
import "../styles/FAQSection.css";

const faqs = [
  {
    question: "Who can participate in Alchemix 2025?",
    answer: "Students, researchers, and professionals in the field of chemical engineering and allied branches are welcome to participate.",
  },
  {
    question: "Is there a registration fee?",
    answer: "Yes, there is a nominal registration fee. Details are available on the event registration page.",
  },
  {
    question: "How do I submit a paper or poster?",
    answer: "You can submit your paper or poster through the official Alchemix website using the submission form provided.",
  },
  {
    question: "Will accommodation be provided?",
    answer: "Yes, limited accommodation will be provided for outstation participants on a first-come, first-served basis.",
  },
  {
    question: "What should I bring to the event?",
    answer: "Please bring your valid college ID, registration confirmation, and event pass for entry.",
  },
  {
    question: "Are certificates provided?",
    answer: "Yes, all participants and winners will receive digital certificates upon completion.",
  },
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <div className="container">
        <span className="badge">Got Questions?</span>
        <h2 className="text-center">Frequently Asked Questions</h2>
        <p className="faq-subtitle text-center">
          Find answers to common questions about Alchemix 2025
        </p>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? "open" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <span>{faq.question}</span>
                <span className="icon">{openIndex === index ? "−" : "+"}</span>
              </div>
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="faq-contact text-center">
          Still have questions? <a href="#">Contact us</a>
        </p>
      </div>
    </section>
  );
}

export default FAQSection;
