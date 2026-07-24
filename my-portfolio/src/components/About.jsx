import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 px-6 md:px-12 max-w-[1300px] mx-auto w-full">
      <h2 className="text-4xl md:text-5xl font-black text-white/70 mb-10 text-center"><span className="text-blue-500">About</span> Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <p className="text-gray-400 leading-relaxed text-lg mb-6">
            I am a third-year Information Technology undergraduate at SLIIT, passionate about learning new technologies and improving my technical skills. I work well in team environments and enjoy collaborating on projects.
          </p>
          <p className="text-gray-400 leading-relaxed text-lg">
            I have experience developing academic projects using the MERN stack and am interested in software and web application development. I am always eager to gain new knowledge and practical experience in the IT field.
          </p>
        </div>
        
        {/* Education Timeline */}
        <div className="border-l-2 border-blue-900 pl-6 space-y-8">
          <div>
            <h3 className="text-xl font-bold  text-white/70">BSc (Hons) in Information Technology</h3>
            <p className="text-blue-500 font-medium">SLIIT University | 2023 - 2027</p>
          </div>
          <div>
            <h3 className="text-xl font-bold  text-white/70">Business Management Diploma</h3>
            <p className="text-blue-500 font-medium">IMBS Green Campus | 2023</p>
          </div>
          <div>
            <h3 className="text-xl font-bold  text-white/70">G.C.E. Advanced Level</h3>
            <p className="text-blue-500 font-medium">Henegama Central Collage | 2021</p>
          </div>
          <div>
            <h3 className="text-xl font-bold  text-white/70">Diploma in Computer Science</h3>
            <p className="text-blue-500 font-medium">SANMO Vocational Training Institute | 2018</p>
          </div>
        </div>
      </div>
    </section>
  );
}