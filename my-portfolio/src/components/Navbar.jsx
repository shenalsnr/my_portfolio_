import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#151515]/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-[1300px] mx-auto w-full px-6 py-4 md:px-12 md:py-5 flex justify-end items-center relative">
        <ul className="hidden md:flex gap-8 text-gray-400 font-medium text-sm absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <li><a href="#home" className="hover:text-blue-500 transition-colors">Home</a></li>
          <li><a href="#about" className="hover:text-white transition-colors">About me</a></li>
          
          <li><a href="#skills" className="hover:text-white transition-colors">Skills</a></li>
          <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
          <li><a href="#contact" className="hover:text-white transition-colors">Contact me</a></li>
        </ul>
        <a href="#contact" className="bg-gradient-to-r from-blue-600 to-blue-900 text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-[0_0_15px_rgba(37,99,235,0.4)] transition-all">
          Hire Me
        </a>
      </div>
    </nav>
  );
}