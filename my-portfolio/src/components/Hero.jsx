import React from 'react';

export default function Hero() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      
      {/* Left Column: Text & Buttons */}
      <div className="flex flex-col z-10">
        <p className="text-gray-400 text-lg mb-2">Hi I am</p>
        <h1 className="text-5xl md:text-6xl font-bold mb-1 leading-tight">
          Shenal Nikeshana
        </h1>
        
        {/* Gradient Title: Developer (Dark Blue Mix) */}
        <h2 className="text-6xl md:text-[80px] font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-900 mb-8 tracking-tight pb-2">
          Developer
        </h2>
        
        {/* Social Icons */}
        <div className="flex gap-4 mb-10">
          {['In', 'Fb', 'Be', 'Dr'].map((icon, index) => (
            <div key={index} className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-blue-500 hover:border-blue-500 cursor-pointer transition-colors font-medium">
              {icon}
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mb-12">
          <button className="bg-gradient-to-r from-blue-600 to-blue-900 text-white px-8 py-3.5 rounded-xl font-bold hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all">
            Hire Me
          </button>
          <button className="border border-gray-600 text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-white/5 transition-colors">
            Download CV
          </button>
        </div>

        {/* Stats Card */}
        <div className="flex items-center gap-6 bg-[#222222]/50 px-8 py-6 rounded-[20px] w-max border border-white/5 shadow-lg">
          <div className="flex flex-col">
            <span className="text-blue-500 text-4xl font-black mb-1">3+</span>
            <span className="text-gray-400 text-xs font-medium uppercase tracking-wider">Experiences</span>
          </div>
          <div className="w-px h-12 bg-gray-700"></div>
          <div className="flex flex-col">
            <span className="text-blue-500 text-4xl font-black mb-1">3+</span>
            <span className="text-gray-400 text-xs font-medium uppercase tracking-wider">Project done</span>
          </div>
          <div className="w-px h-12 bg-gray-700"></div>
          <div className="flex flex-col">
            <span className="text-blue-500 text-4xl font-black mb-1">3+</span>
            <span className="text-gray-400 text-xs font-medium uppercase tracking-wider">Happy Clients</span>
          </div>
        </div>
      </div>

      {/* Right Column*/}
      <div className="flex justify-center md:justify-end items-center">
        <div className="relative w-[320px] h-[460px] md:w-[400px] md:h-[560px]">
          
          
          <div 
            className="absolute inset-0 bg-gradient-to-tr from-blue-800 to-slate-950 translate-x-2 translate-y-2 md:translate-x-3 md:translate-y-3 shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
            style={{ clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0 100%)' }}
          ></div>

          {/* Main Image Container */}
          <div 
            className="absolute inset-0 bg-[#1a1a1a] flex justify-center items-end overflow-hidden border border-gray-800"
            style={{ clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0 100%)' }}
          >
            {/* Profile Image (img.png) */}
            <img 
              src="/img.png" 
              alt="Shenal Nikeshana" 
              className="w-auto h-full md:h-[95%] object-cover object-bottom grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-500 origin-bottom"
            />
          </div>

        </div>
      </div>

    </div>
  );
}