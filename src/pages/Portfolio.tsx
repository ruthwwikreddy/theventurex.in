import React from 'react';
import { PageContainer } from '../components/shared/PageContainer';
import { Button } from '../components/shared/Button';

type Project = {
  title: string;
  description: string;
  image: string;
  category: string;
};

const projects: Project[] = [
  {
    title: "EduTech Platform",
    description: "A learning management system built for high school students",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
    category: "Web App"
  },
  {
    title: "Eco Tracker",
    description: "Mobile app for tracking personal carbon footprint",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
    category: "Mobile App"
  },
  {
    title: "Social Impact",
    description: "Platform connecting young volunteers with local causes",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800&q=80",
    category: "Web App"
  }
];

export function Portfolio() {
  return (
    <PageContainer>
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Portfolio</h1>
        <p className="text-[#CCCCCC] text-lg max-w-2xl mx-auto">
          Showcasing successful projects built by teen entrepreneurs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {projects.map((project) => (
          <div key={project.title} className="bg-white/5 backdrop-blur-lg rounded-xl overflow-hidden group">
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute top-2 right-2 bg-[#6D5DFB] text-white text-sm px-3 py-1 rounded-full">
                {project.category}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-white font-semibold text-xl mb-2">{project.title}</h3>
              <p className="text-[#CCCCCC] text-sm mb-4">{project.description}</p>
              <Button variant="secondary" className="w-full">View Case Study</Button>
            </div>
          </div>
        ))}
      </div>
    </PageContainer>
  );
}