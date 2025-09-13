"client side"
import React from "react";

const Contact = () => {
  return (
    <div className="p-6 flex justify-center ">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-2xl">
        
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Contact Me
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Your feedback is important to us. For any suggestions, questions, or feedback, please contact us via the phone number or email provided below.
        </p>
        <div className="mt-10 text-center space-y-2">
          <a href="tel:+9929670921" className="text-gray-700">
            📱 Phone: +9929670921
          </a>
         
          <p className="text-gray-700">
            📧 Email: <a href="mailto:nn0445292@gmail.com" className="text-blue-500">nn0445292@gmail.com</a>
          </p>

           <p className="text-gray-700">
            📍 Location: Jodhpur, Rajasthan
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Contact;
