import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 md:px-12 max-w-[1300px] mx-auto w-full mb-10">
      <h2 className="text-4xl md:text-5xl font-black text-white/70 mb-12 text-center"><span className="text-blue-500">Contact</span> Me</h2>
      <div className="bg-[#1a1a1a] border border-gray-800 p-10 rounded-3xl max-w-4xl mx-auto flex flex-col md:flex-row gap-12 justify-between items-center shadow-2xl">
        <div className="space-y-6 w-full">
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

        <div className="w-full flex justify-center md:justify-end gap-6">
          <a href="https://github.com/shenalsnr" target="_blank" rel="noreferrer" className="px-8 py-3 rounded-xl border border-gray-600 text-white font-semibold hover:bg-gray-800 transition-colors">
            GitHub
          </a>
          <a href="https://linkedin.com/in/shenal-n-rajapaksha" target="_blank" rel="noreferrer" className="px-8 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-colors">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}