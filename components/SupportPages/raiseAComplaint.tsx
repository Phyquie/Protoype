'use client';
import React, { useState } from "react";

const RaiseComplaint: React.FC = () => {
  const [selectedComplaint, setSelectedComplaint] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '+91 987654321',
    message: '',
    selectedComplaint: ''
  });

  const complaintOptions = [
    "Dealer is charging extra amount apart from the agreed price.",
    "Car condition doesn't match the listing description",
    "Seller is not responding to calls/messages",
    "Fake or misleading photos in the listing",
    "Payment issues with the transaction",
    "Car documents are incomplete or suspicious",
    "Seller cancelled the deal without valid reason",
    "Car has hidden damages not mentioned in listing",
    "Overpriced compared to market value",
    "Poor customer service from dealer/seller"
  ];

  const handleDropdownSelect = (option: string) => {
    setSelectedComplaint(option);
    setIsDropdownOpen(false);
  };

  return (
    <div className="max-w-7xl mx-auto p-8 bg-white">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Raise a complaint</h1>
        <p className="text-gray-600 text-lg">Any question or remarks? Just write us a message!</p>
      </div>

      {/* Main Content Container */}
      <div className="border-2 border-blue-400 rounded-xl p-8 grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-[600px]">
        
        {/* Left Side - Contact Information */}
        <div className="bg-gradient-to-br from-gray-800 via-gray-700 to-orange-400 rounded-xl p-8 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-2">Contact Information</h2>
            <p className="text-gray-300 mb-8">Say something to start a live chat!</p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-5 h-5">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span>+91 85 85 85 85 86</span>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-5 h-5">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span>carrer@six.ind.in</span>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-5 h-5 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div>Siddha Suburbia / 1406 Block B,</div>
                  <div>Kolkata , South 24</div>
                  <div>Parganas , West Bengal</div>
                  <div>Pin code: 700145</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative Circle */}
          <div className="absolute bottom-8 right-8 w-32 h-32 bg-gray-600 rounded-full opacity-50"></div>
        </div>

        {/* Right Side - Complaint Form */}
        <div className="p-8">
          <form className="space-y-6">
            {/* First Row - First Name and Last Name */}
            <div className="grid grid-cols-2 gap-8">
              <div>
                <label className="block text-gray-600 font-medium mb-2">First Name</label>
                <input 
                  type="text" 
                  value={formData.firstName}
                  onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  className="w-full border-b border-gray-300 bg-transparent pb-2 text-gray-900 focus:border-black focus:outline-none" 
                />
              </div>
              <div>
                <label className="block text-gray-600 font-medium mb-2">Last Name</label>
                <input 
                  type="text" 
                  value={formData.lastName}
                  onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                  className="w-full border-b border-gray-300 bg-transparent pb-2 text-gray-900 focus:border-black focus:outline-none" 
                />
              </div>
            </div>

            {/* Second Row - Email and Phone */}
            <div className="grid grid-cols-2 gap-8">
              <div>
                <label className="block text-gray-600 font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full border-b border-gray-300 bg-transparent pb-2 text-gray-900 focus:border-black focus:outline-none" 
                />
              </div>
              <div>
                <label className="block text-gray-600 font-medium mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  value={formData.phoneNumber}
                  onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
                  className="w-full border-b border-gray-300 bg-transparent pb-2 text-gray-900 focus:border-black focus:outline-none" 
                />
              </div>
            </div>

            {/* Subject Selection Dropdown */}
            <div className="mt-8">
              <label className="block text-gray-600 font-medium mb-4">Select Subject?</label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full text-left border-b border-gray-300 bg-transparent pb-2 text-gray-900 focus:border-black focus:outline-none flex justify-between items-center"
                >
                  <span className={selectedComplaint ? "text-gray-900" : "text-gray-500"}>
                    {selectedComplaint || "Dealer is charging extra amount apart from the agreed price."}
                  </span>
                  <svg 
                    className={`w-5 h-5 text-gray-400 transform transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-md shadow-lg z-10 max-h-60 overflow-y-auto mt-1">
                    {complaintOptions.map((option, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => handleDropdownSelect(option)}
                        className="w-full text-left px-4 py-3 text-gray-900 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 focus:bg-gray-100 focus:outline-none"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Message */}
            <div className="mt-8">
              <label className="block text-gray-600 font-medium mb-2">Message</label>
              <textarea
                placeholder="Write your message.."
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full border-b border-gray-300 bg-transparent pb-2 text-gray-900 focus:border-black focus:outline-none resize-none"
                rows={1}
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end mt-8">
              <button 
                type="submit" 
                className="bg-black text-white font-semibold px-8 py-3 rounded-md hover:bg-gray-800 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RaiseComplaint;
