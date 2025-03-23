import React, { useState } from "react";


const faqs = [
  { question: "So, you’re a startup?", answer: "Yes, we are a startup focusing on web solutions." },
  { question: "Is Netzwerk right for me?", answer: "If you need stunning web apps, Netzwerk is for you." },
  { question: "How do I get Benefit?", answer: "You gain access to reliable, scalable solutions." },
  { question: "How much time it takes to deliver my project?", answer: "Project delivery depends on scope, usually within weeks." },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-xl font-semibold text-gray-500">FAQ’s</h2>
        <h1 className="text-4xl font-bold text-gray-900 mt-2">We’re here to answer all your questions</h1>
        <p className="text-gray-600 mt-4">
          If you’re new to Netzwerk or looking to build stunning web apps, this section will help you learn more about the platform and its features.
        </p>
      </div>

      <div className="max-w-2xl mx-auto mt-10">
        {faqs.map((faq, index) => (
          <div key={index} className="">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left flex justify-between items-center px-4 py-5 bg-gray-100 rounded-md text-lg font-medium my-4"
            >
              {faq.question}
              <span className="text-xl">{openIndex === index ? "︿" : "﹀"}</span>
            </button>
            {openIndex === index && (
              <div className="px-4 py-3 text-gray-700">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
