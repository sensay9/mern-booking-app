// Hero.tsx

// Importing React library for creating components
import React from 'react';

// Functional component representing the hero section of the website
const Hero = () => {
  return (
    // Container with a blue background and padding at the bottom
    <div className="bg-blue-800 pb-16">
      {/* Container with max-width, vertical flex layout, and small gap between child elements */}
      <div className="container mx-auto flex flex-col gap-2">
        {/* Heading with a large font size, white color, and bold font weight */}
        <h1 className="text-5xl text-white font-bold">Find your next stay</h1>

        {/* Subtitle with a large font size, white color */}
        <p className="text-2xl text-white">Search low prices on hotels for your dream vacation...</p>
      </div>
    </div>
  );
};

// Exporting the Hero component as the default export
export default Hero;
