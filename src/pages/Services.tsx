import React from 'react';
import { PageContainer } from '../components/shared/PageContainer';
import { Card } from '../components/shared/Card';
import { Code, Rocket, Smartphone, Globe } from 'lucide-react';
import { Button } from '../components/shared/Button';

export function Services() {
  return (
    <PageContainer>
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h1>
        <p className="text-[#CCCCCC] text-lg max-w-2xl mx-auto">
          Comprehensive solutions to bring your vision to life
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <Card
          icon={Code}
          title="MVP Development"
          description="Quick turnaround on minimum viable products to test your idea in the market"
        />
        <Card
          icon={Rocket}
          title="Startup Launch"
          description="End-to-end support from ideation to market launch"
        />
        <Card
          icon={Smartphone}
          title="Mobile Apps"
          description="Native and cross-platform mobile applications"
        />
        <Card
          icon={Globe}
          title="Web Applications"
          description="Responsive and scalable web solutions"
        />
      </div>

      <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
        <p className="text-[#CCCCCC] mb-8">
          Let's turn your idea into reality with our affordable solutions
        </p>
        <Button variant="primary">Schedule a Free Consultation</Button>
      </div>
    </PageContainer>
  );
}