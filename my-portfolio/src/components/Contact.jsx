import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 md:px-12 max-w-[1300px] mx-auto w-full mb-10">
      <h2 className="text-4xl md:text-5xl font-black text-white/70 mb-12 text-center"><span className="text-blue-500">Contact</span> Me</h2>
      <div className="bg-[#1a1a1a] border border-gray-800 p-10 md:p-12 rounded-3xl w-full flex flex-col md:flex-row gap-12 justify-between items-center shadow-2xl">
        <div className="space-y-6 w-full md:w-auto">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-900/30 rounded-full flex items-center justify-center text-blue-500 font-bold">📞</div>
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wider font-bold">Phone</p>
              <p className="text-white/70 text-lg">+94 72 2626441</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-900/30 rounded-full flex items-center justify-center text-blue-500 font-bold">✉️</div>
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wider font-bold">Email</p>
              <p className="text-white/70 text-lg">shenalsnr@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-900/30 rounded-full flex items-center justify-center text-blue-500 font-bold">📍</div>
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wider font-bold">Location</p>
              <p className="text-white/70 text-lg">Malabe, Colombo</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center md:justify-end gap-6">
          <a
            href="https://github.com/shenalsnr"
            target="_blank"
            rel="noreferrer"
            title="GitHub"
            aria-label="GitHub Profile"
            className="w-14 h-14 rounded-2xl bg-[#222] border border-gray-700 flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-800 hover:border-blue-500 hover:scale-110 transition-all duration-300 shadow-lg"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="https://linkedin.com/in/shenal-n-rajapaksha"
            target="_blank"
            rel="noreferrer"
            title="LinkedIn"
            aria-label="LinkedIn Profile"
            className="w-14 h-14 rounded-2xl bg-[#222] border border-gray-700 flex items-center justify-center text-blue-500 hover:text-white hover:bg-blue-600 hover:border-blue-500 hover:scale-110 transition-all duration-300 shadow-lg"
          >
            <FaLinkedin size={28} />
          </a>
        </div>
      </div>
    </section>
  );
}