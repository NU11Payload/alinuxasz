import React from 'react';
import { Shield, Code, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 'security-services',
      icon: <Shield className="w-6 h-6" />,
      name: 'Security Services',
      description: 'Advanced cybersecurity solutions'
    },
    {
      id: 'development',
      icon: <Code className="w-6 h-6" />,
      name: 'Development',
      description: 'Custom software development'
    },
    {
      id: 'performance',
      icon: <Zap className="w-6 h-6" />,
      name: 'Performance',
      description: 'System optimization'
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
};

export default Services;
