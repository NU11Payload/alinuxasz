import React from 'react';
import { Shield, Code, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 'security-services',
      icon: <Shield className="w-6 h-6" />,
      name: 'Security Services',
      description: 'Comprehensive security assessments, penetration testing, and implementation of robust cybersecurity measures.'
    },
    {
      id: 'development',
      icon: <Code className="w-6 h-6" />,
      name: 'Development',
      description: 'Full-stack development solutions including web applications, mobile apps, and enterprise software.'
    },
    {
      id: 'performance',
      icon: <Zap className="w-6 h-6" />,
      name: 'Performance',
      description: 'System optimization, performance tuning, and infrastructure scaling solutions.'
    }
  ];

  return (
    <div className="services-container min-h-screen p-8">
      <div className="services-window mt-16">
        <div className="window-controls">
          <div className="control-button bg-red-500"></div>
          <div className="control-button bg-yellow-500"></div>
          <div className="control-button bg-green-500"></div>
        </div>
        
        <h1 className="service-title mb-6">Services_</h1>
        
        <div className="space-y-6">
          {services.map((service, index) => (
            <div key={index} className="flex items-center space-x-4 hover:bg-green-500/10 p-4 rounded-lg transition-colors">
              <span className="text-green-500">{service.icon}</span>
        <div className="grid gap-6 mt-8">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <div>
                <h3 className="service-title">{service.name}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Services;
