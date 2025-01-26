import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Terminal, Shield, Code, Zap } from 'lucide-react';
import TypeWriter from './TypeWriter';

const Home = () => {
  const navigate = useNavigate();

  const handleServicesClick = () => {
    navigate('/services');
  };

  return (
    <div className="terminal-window border border-green-500 rounded-lg p-6 bg-black/50 backdrop-blur">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <TypeWriter text="Welcome to Alinuxa LLC_" />
      <div className="mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="flex items-center">
            <Shield className="mr-2" />
            <span
              onClick={handleServicesClick}
              className="cursor-pointer hover:text-green-400 transition-colors duration-200 text-green-500 underline"
              role="button"
              tabIndex={0}
              onKeyPress={(e) => e.key === 'Enter' && handleServicesClick()}
            >
              Services offered:
            </span>
          </div>
          <div className="flex items-center">
            <Zap className="mr-2" />
            <span>Security Advisory services: Compliance and Risk Assessment</span>
          </div>
          <div className="flex items-center">
            <Code className="mr-2" />
            <span>Software Development: Front end and Back end web development</span>
          </div>
          <div className="flex items-center">
            <Terminal className="mr-2" />
            <span>VPS, Web and Dedicated Server Hardening service & Hostings</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
