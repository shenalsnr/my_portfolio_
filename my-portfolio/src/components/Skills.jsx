import React from 'react';

export default function Skills() {
  const categories = [
    { name: "Frontend", items: ["JavaScript", "HTML", "CSS", "React.js", "Tailwind CSS", "Figma"] },
    { name: "Backend", items: ["Java", "Node.js", "Express.js", "Spring Boot", "REST APIs"] },
    { name: "Database", items: ["MongoDB", "MySQL", "SQL Server"] },
    { name: "Tools & Testing", items: ["GitHub", "VS Code", "Postman", "ChatGPT", "Gemini"] }
  ];

  return (
    <section id="skills" className="py-20 px-6 md:px-12 max-w-[1300px] mx-auto w-full">
      <h2 className="text-4xl md:text-5xl font-black text-white/70 mb-12 text-center">Technical <span className="text-blue-500">Skills</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((cat, idx) => (
          <div key={idx} className="bg-[#1a1a1a] border border-gray-800 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-white/70 mb-6 border-b border-gray-700 pb-2">{cat.name}</h3>
            <div className="flex flex-wrap gap-3">
              {cat.items.map((item, i) => (
                <span key={i} className="bg-blue-900/20 text-blue-400 border border-blue-800/50 px-4 py-2 rounded-full text-sm font-medium">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}