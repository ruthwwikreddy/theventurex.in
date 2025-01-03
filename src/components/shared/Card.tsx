import React from 'react';
import { LucideIcon } from 'lucide-react';

type CardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export function Card({ icon: Icon, title, description }: CardProps) {
  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 hover:transform hover:-translate-y-1 transition-all duration-300">
      <div className="w-12 h-12 mb-4 mx-auto bg-gradient-to-r from-[#6D5DFB] to-[#FF6EC7] rounded-lg flex items-center justify-center">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
      <p className="text-[#CCCCCC] text-sm">{description}</p>
    </div>
  );
}