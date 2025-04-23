import React from 'react';

const AboutSection = () => {
  return (
    <div className="w-full py-12 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Responsive Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Left Column - Main Image Placeholder */}
          <div className="w-full rounded-3xl overflow-hidden relative">
            <div 
              className="w-full h-96 md:h-[500px] bg-emerald-200 flex items-center justify-center"
              aria-label="Image placeholder (about-1.png)"
            >
              <span className="text-emerald-800 font-medium">about-1.png</span>
            </div>
          </div>
          
          {/* Right Column - Content */}
          <div className="flex flex-col space-y-6">
            {/* Top Image Placeholder */}
            <div className="w-full rounded-3xl overflow-hidden relative">
              <div 
                className="w-full h-64 bg-blue-200 flex items-center justify-center"
                aria-label="Image placeholder (about-2.png)"
              >
                <span className="text-blue-800 font-medium">about-2.png</span>
              </div>
              
              {/* Customer Avatar Overlay */}
              <div className="absolute bottom-4 left-4">
                <div className="flex items-center">
                  <div 
                    className="h-12 w-48 rounded-full bg-amber-200 flex items-center justify-center"
                    aria-label="Image placeholder (about-3.png)"
                  >
                    <span className="text-amber-800 text-sm font-medium">about-3.png</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Text Content */}
            <div className="space-y-4">
              <p className="text-green-700 font-medium">About HouseBox</p>
              
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
                Embrace the Elegance Our Exclusive Property
              </h2>
              
              <p className="text-gray-600">
                At HouseBox, we're redefining the way people find, sell, 
                and invest in properties. Our mission is to simplify real 
                estate by provide innovative solutions, expert guidance.
              </p>
              
              {/* Stats Section */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold">0K</h3>
                  <p className="text-sm text-gray-500">Homes Sold</p>
                </div>
                
                <div className="text-center">
                  <h3 className="text-2xl font-bold">0K</h3>
                  <p className="text-sm text-gray-500">Happy Client</p>
                </div>
                
                <div className="text-center">
                  <h3 className="text-2xl font-bold">0%</h3>
                  <p className="text-sm text-gray-500">Satisfaction Rate</p>
                </div>
              </div>
              
              {/* CTA Button */}
              <div className="mt-6">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md flex items-center">
                  See All Properties
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;