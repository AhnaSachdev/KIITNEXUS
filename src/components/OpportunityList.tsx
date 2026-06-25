import React from 'react';

const roles = [
  {
    title: "Web Development (Full-Stack)",
    description: "Design and manage robust web architectures. Experience with React.js, Express, and MongoDB is highly preferred.",
    tags: ["React", "Express", "MongoDB", "Node.js"]
  },
  {
    title: "UI/UX Design",
    description: "Craft pixel-perfect, detailed visual parameters for our platforms and event promotions.",
    tags: ["Figma", "Wireframing", "User Research"]
  },
  {
    title: "Blockchain Development",
    description: "Explore the decentralized web by writing smart contracts and building dApps.",
    tags: ["Solidity", "Web3.js", "Smart Contracts"]
  }
];

const OpportunityList = () => {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-8 border-b border-zinc-800 pb-2">Open Roles</h2>
      <div className="space-y-4">
        {roles.map((role, index) => (
          <div key={index} className="bg-zinc-900/50 hover:bg-zinc-900 transition-colors p-6 rounded-lg border border-zinc-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h3 className="text-2xl font-bold text-zinc-100">{role.title}</h3>
              <p className="text-zinc-400 mt-2 max-w-2xl">{role.description}</p>
              <div className="flex gap-2 mt-4 flex-wrap">
                {role.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-zinc-800 text-zinc-300 text-xs rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors whitespace-nowrap">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OpportunityList;