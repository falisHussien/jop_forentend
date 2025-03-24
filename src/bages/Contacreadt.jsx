import React, { useEffect, useState } from "react";
import axios from "axios";
import Dashpour from "../bages/Dashpour";

const ContactMessages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/contact");
        setMessages(response.data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();
  }, []);

  return (
    <div className="flex flex-col">
      {/* Dashpour component */}
      <div className="w-full mb-8">
        <Dashpour />
      </div>

      {/* Content area */}
      <div className="p-8 mt-8 ml-56">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Contact Messages</h2>

        {/* Grid layout for messages */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {messages.map((message, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800">{message.name}</h3>
              <p className="mt-2 text-gray-600"><strong>Email:</strong> {message.email}</p>
              <p className="mt-2 text-gray-600"><strong>Message:</strong> {message.message}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactMessages;
