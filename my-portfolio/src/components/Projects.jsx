import React from 'react';

export default function Projects() {
  const projects = [
    {
      title: "Spice Buying and Selling Website",
      stack: "MERN Stack",
      desc: "Developed an academic web application. Contributed to User Management module (registration, login, account management).",
      image: "/spice.png"
    },
  
    {
      title: "Locker & Parking Management",
      stack: "MERN Stack",
      desc: "Developed a management system for locker and parking operations. Worked on the Locker Management module (booking, user/admin functionalities).",
      image: "/unispot.png"
    },
    {
      title: "Uni Facility & Asset Booking System",
      stack: "Spring Boot, React",
      desc: "Web platform for managing university resource bookings. Contributed to Booking Management (requests, approvals, conflict prevention).",
      image: "/unip.png"
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 md:px-12 max-w-[1300px] mx-auto w-full">
      <h2 className="text-4xl md:text-5xl font-black text-white/70 mb-12 text-center">Recent <span className="text-blue-500">Projects</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((proj, idx) => (
          <div key={idx} className="bg-[#1a1a1a] border border-gray-800 p-8 rounded-2xl flex flex-col h-full hover:-translate-y-2 transition-transform duration-300">
            {proj.image && (
              <div className="w-full h-48 mb-5 overflow-hidden rounded-xl border border-gray-800">
                <img src={proj.image} alt={proj.title} className="w-full h-full object-cover" />
              </div>
            )}
            <span className="text-xs font-bold text-blue-500 uppercase tracking-widest mb-2">{proj.stack}</span>
            <h3 className="text-xl font-bold text-white/70 mb-4">{proj.title}</h3>
            <p className="text-gray-400 leading-relaxed flex-grow">{proj.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}