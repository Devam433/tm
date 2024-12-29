"use client"
import React from 'react';

const ContactUs = () => {
  return (
    <div className="">
      {/* Hero Section */}
      <header id="emtee-hero" className="relative w-full  bg-cover bg-top py-10">
        <div className="absolute inset-0 opacity-50"></div>
        <div className="relative z-10 flex justify-center items-center">
          <div className="text-center text-white">
            <h2 className="text-4xl font-semibold mb-4">Contact Us</h2>
            <p className="text-xl mb-6">TM Talent Management</p>
            <p className="text-lg mb-4">
              Bungalow no. 181/182, Aram Nagar Part 2,<br />
              Versova, Andheri (W), Mumbai – 400061<br />
              Maharashtra, India
            </p>
            <p className="text-lg mb-4">Call us: +91 8828834076 / +91 7738161619</p>
            <p className="text-lg mb-4">
              Email: <a href="mailto:info@tmtalentmanagement.com" className="text-blue-400">info@tmtalentmanagement.com</a><br />
              Drop your CVs at <a href="mailto:careers@tmventures.in" className="text-blue-400">careers@tmventures.in</a><br />
              For legal notices please email us at <a href="mailto:legal@tmventures.in" className="text-blue-400">legal@tmventures.in</a>
            </p>
            <p className="text-blue-500 text-xl mb-6">Leave a message, and we will get back to you.</p>
          </div>
        </div>
      </header>

      {/* Contact Form Section */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-lg mx-auto">
          <form name="htmlform" method="post" action="#">
            <div className="mb-4">
              <input type="text" name="first_name" placeholder="First Name *" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
            </div>
            <div className="mb-4">
              <input type="text" name="last_name" placeholder="Last Name *" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
            </div>
            <div className="mb-4">
              <input type="email" name="email" placeholder="Email Address *" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
            </div>
            <div className="mb-4">
              <input type="text" name="telephone" placeholder="Telephone Number" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
            </div>
            <div className="mb-4">
              <textarea name="comments" placeholder="Message" className="w-full px-4 py-2 border border-gray-300 rounded-md h-32"></textarea>
            </div>
            <div className="flex justify-center">
              <input type="submit" value="Submit" className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md cursor-pointer hover:bg-blue-600" />
            </div>
          </form>
        </div>
      </div>

    </div>
  );
}

export default ContactUs;
