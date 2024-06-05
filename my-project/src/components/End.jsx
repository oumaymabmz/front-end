import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const End = () => {
  return (
    <div className="relative">
      <div className="relative h-screen flex justify-center items-center bg-gray-100">
        <div className="text-center max-w-[800px]">
          <h2 className="text-4xl font-bold text-black mb-6">
            We are here to find your best occupation from the beginning to the end. For more information, contact us on WhatsApp +... or email. Have the greatest holiday with HDFV.
          </h2>
          <div className="mt-6 flex justify-center space-x-4 items-center">
            <FaWhatsapp className="text-2xl text-green-500" />
            <span className="text-lg text-black">Contact us: +1 (234) 567-8901 (WhatsApp)</span>
          </div>
          <div className="mt-2">
            <span className="text-lg text-black">Email: info@travelguide.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default End;
