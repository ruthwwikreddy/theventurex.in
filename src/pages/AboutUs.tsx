import React from 'react';
import { PageContainer } from '../components/shared/PageContainer';
import { Card } from '../components/shared/Card';
import { Target, Heart, Zap } from 'lucide-react';

export function AboutUs() {
  return (
    <PageContainer>
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About VentureX</h1>
        <p className="text-[#CCCCCC] text-lg max-w-2xl mx-auto">
          We're a team of young innovators passionate about helping teens turn their ideas into reality.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <Card
          icon={Target}
          title="Our Mission"
          description="Empowering the next generation of entrepreneurs with affordable tech solutions"
        />
        <Card
          icon={Heart}
          title="Our Values"
          description="Innovation, accessibility, and genuine support for young founders"
        />
        <Card
          icon={Zap}
          title="Our Impact"
          description="Helping teens launch successful startups and make their mark on the world"
        />
      </div>

      <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 text-white">
        <h2 className="text-2xl font-bold mb-6">Our Story</h2>
        <p className="text-[#CCCCCC] mb-4">
          Founded by teens who experienced firsthand the challenges of building startups, VentureX was born from the desire to make tech entrepreneurship accessible to young innovators.
        </p>
        <p className="text-[#CCCCCC]">
          Today, we're proud to help teens across the globe transform their ideas into successful digital products, all while keeping costs manageable for young founders.
        </p>
      </div>
    </PageContainer>
  );
}