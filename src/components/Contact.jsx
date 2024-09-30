import React from "react";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";
import toast from "react-hot-toast";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "270c1e63-16eb-4c61-8bae-0c2b0c9da590");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      toast.success("Message Sent Sucessfully!");
    }
  };

  return (
    <div className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-20 poppins-regular ">
          Get in Touch
        </h2>
        <div className="flex flex-col md:flex-row justify-center md:space-x-12">
          <div className="flex-1">
            <h3
              className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
            from-green-400 to-blue-500 mb-4"
            >
              Let's talk
            </h3>
            <p className="text-xl">
              I'm open to discussing web development prjects or partnership
              opportunities.
            </p>
            <br />
            <div className="mb-4 mt-8">
              <FaEnvelope className="inline-block text-green-400 mr-2"></FaEnvelope>
              <a href="mailto:youremail@example.com">
                &nbsp; akhileshgupta2404@gmail.com
              </a>
            </div>
            <div className="mb-4">
              <FaPhone className="inline-block text-green-400 mr-2"></FaPhone>
              <span> +91 7007741161</span>
            </div>
            <div className="mb-4">
              <FaMapMarkedAlt className="inline-block text-green-400 mr-2"></FaMapMarkedAlt>
              <span> Kanpur Nagar, UttarPradesh</span>
            </div>
          </div>
          <br />
          <br />
          <div className="flex-1 w-full">
            <form onSubmit={onSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2">
                  Name
                </label>
                <input
                  type="text"
                  required
                  name="name"
                  className="w-full p-4 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400 focus:border-2"
                  placeholder="Enter Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">
                  Email
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  className="w-full p-4 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400 focus:border-2"
                  placeholder="Enter Your Email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <textarea
                  required
                  name="message"
                  className="w-full p-4 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400 focus:border-2"
                  rows="5"
                  placeholder="Enter Your Message"
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-green-400 to-blue-500 text-white md:inline
                  px-10 py-2 rounded-full text-xl"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
