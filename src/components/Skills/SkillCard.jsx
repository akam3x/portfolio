import React from 'react';

const SkillCard = ({ skill }) => {
  const Icon = skill.icon;
  
  return (
    <div className="text-center">
      <div className="bg-gradient-to-br from-purple-600 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
        <Icon size={32} className="text-white" />
      </div>
      <h3 className="text-xl font-bold text-white mb-4">{skill.name}</h3>
      <div className="space-y-2">
        {skill.items.map((item, index) => (
          <div key={index} className="bg-slate-700/50 text-gray-300 px-3 py-2 rounded-lg">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;