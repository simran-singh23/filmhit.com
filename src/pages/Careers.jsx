import React from "react";

const Careers = () => {
  const jobs = [
    {
      id: 1,
      role: "Frontend Developer",
      type: "Full Time",
      location: "Remote",
    },
    {
      id: 2,
      role: "UI/UX Designer",
      type: "Part Time",
      location: "Chandigarh",
    },
    {
      id: 3,
      role: "React Developer",
      type: "Internship",
      location: "Delhi",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">

      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">
          Join Our Team 🚀
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto">
          Build amazing digital experiences with us. Explore exciting
          career opportunities in development, design and tech.
        </p>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="bg-zinc-900 p-6 rounded-3xl shadow-lg hover:scale-105 transition duration-300"
          >
            <h2 className="text-2xl font-bold mb-3">
              {job.role}
            </h2>

            <p className="text-red-400 mb-2">
              {job.type}
            </p>

            <p className="text-gray-400 mb-6">
              📍 {job.location}
            </p>

            <button className="w-full bg-red-600 hover:bg-red-700 py-3 rounded-xl font-semibold transition">
              Apply Now
            </button>
          </div>
        ))}
      </div>

      
      <div className="text-center text-gray-500 mt-16 border-t border-zinc-800 pt-6">
        © 2026 filmyhit
      </div>
    </div>
  );
};

export default Careers;
