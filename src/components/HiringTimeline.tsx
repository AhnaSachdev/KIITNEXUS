import React from 'react';

const HiringTimeline = () => {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-8 border-b border-zinc-800 pb-2">The Progression Track</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {/* 1st Year */}
        <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
          <h3 className="text-xl font-bold text-blue-400 mb-2">1st Year</h3>
          <p className="text-sm font-semibold text-zinc-300 mb-2">Skill Acquisition</p>
          <p className="text-zinc-500 text-sm">Learning core concepts, shadowing seniors, contributing to beginner repositories.</p>
        </div>
        {/* 2nd Year */}
        <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
          <h3 className="text-xl font-bold text-green-400 mb-2">2nd Year</h3>
          <p className="text-sm font-semibold text-zinc-300 mb-2">Project Development</p>
          <p className="text-zinc-500 text-sm">Building core features, participating in hackathons, handling active domain tasks.</p>
        </div>
        {/* 3rd Year */}
        <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
          <h3 className="text-xl font-bold text-purple-400 mb-2">3rd Year</h3>
          <p className="text-sm font-semibold text-zinc-300 mb-2">Leadership & Architecture</p>
          <p className="text-zinc-500 text-sm">Mentoring juniors, leading project tracks, architectural decision-making.</p>
        </div>
      </div>
    </section>
  );
};

export default HiringTimeline;