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
      description: 'Comprehensive security assessments, penetration testing, and implementation of robust cybersecurity measures.'
    },
    {
      icon: <Code className="w-6 h-6" />,
      name: 'Development',
      description: 'Full-stack development solutions including web applications, mobile apps, and enterprise software.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      name: 'Performance',
      description: 'System optimization, performance tuning, and infrastructure scaling solutions.'
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
        
        <div className="space-y-6">
          {services.map((service, index) => (
            <div key={index} className="flex items-center space-x-4 hover:bg-green-500/10 p-4 rounded-lg transition-colors">
              <span className="text-green-500">{service.icon}</span>
              <div>
                <h2 className="text-green-500 font-mono">{service.name}</h2>
                <p className="text-gray-400">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;