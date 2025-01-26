import React from 'react';
import { Shield, Code, Zap } from 'lucide-react';

/**
 * Displays a list of services provided by Alinuxa LLC.
 *
 * @returns A component that displays a list of services.
 */
const Services = () => {
  const services = [
    {
      icon: <Shield className="w-6 h-6" />,
      name: 'Security Services',
      description: 'Advanced cybersecurity solutions'
    },
    {
      icon: <Code className="w-6 h-6" />,
      name: 'Development',
      description: 'Custom software development'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      name: 'Performance',
      description: 'System optimization'
    }
  ];

  return (
    <div className="min-h-screen bg-black p-4">
      <div className="terminal-window border border-green-500 rounded-lg p-6 bg-black/50 backdrop-blur">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        
        <h1 className="text-green-500 text-2xl mb-6">Services_</h1>
        
        <div className="grid gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="flex items-center space-x-4 p-4 border border-green-500/20 rounded hover:border-green-500/40 transition-colors"
            >
              <div className="text-green-500">{service.icon}</div>
              <div>
                <h3 className="text-green-500 text-lg">{service.name}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
