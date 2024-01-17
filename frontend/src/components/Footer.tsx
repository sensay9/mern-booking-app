// Footer.tsx

// Import React to use React features
import React from 'react';

// Functional component representing the footer of the website
const Footer = () => {
  return (
    // Outer container with a blue background and padding
    <div className="bg-blue-800 py-10">
      {/* Inner container with flex layout, centered and spaced between items */}
      <div className="container mx-auto flex justify-between items-center">
        {/* Branding and site name in large white text with tight tracking */}
        <span className="text-3xl text-white font-bold tracking-tight">MernHolidays.com</span>

        {/* Links for Privacy Policy and Terms of Service in white text with bold tracking and a gap of 4 */}
        <span className="text-white font-bold tracking-tight flex gap-4">
          {/* Privacy Policy link with a cursor-pointer style */}
          <p className="cursor-pointer">Privacy Policy</p>
          
          {/* Terms of Service link with a cursor-pointer style */}
          <p className="cursor-pointer">Terms of Service</p>
        </span>
      </div>
    </div>
  );
};

// Export the Footer component to make it available for other parts of the application
export default Footer;
