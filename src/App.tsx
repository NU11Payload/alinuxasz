import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Terminal, Shield, Code, Zap } from 'lucide-react';
import Services from './pages/Services';
import Contact from './pages/Contact';

const TypeWriter = ({ text, speed = 50 }: { text: string; speed?: number }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    setDisplayText(''); // Reset text when input changes
    let currentIndex = 0;
    
    const timer = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText(text.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(timer);
      }
    }, speed);

    return () => {
      clearInterval(timer);
      setDisplayText('');
    };
  }, [text, speed]);

  return (
    <span>
      {displayText}
      <span className="cursor"></span>
    </span>
  );
};

const Command = ({ command, output }: { command: string; output: string }) => (
  <div>
    <div className="command-line">
      <span className="prompt">Security@alinuxa:~$</span>
      <span className="command">{command}</span>
    </div>
    <div className="output">{output}</div>
  </div>
);

// Create a new component for the home content since useNavigate must be used inside Router context
const HomeContent = () => {
  const navigate = useNavigate();

  const handleServicesClick = () => {
    navigate('/services');
  };

  return (
    <div className="terminal-window">
      <TypeWriter text="corp@Alinuxa.com. Alinuxa LLC Cybersecurity, Threat Intelligence, and Software Development. All rights reserved" />
      <div className="mt-8">
        <Command 
          command="./display_services.sh" 
          output={
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
                <span>Security Advisory services: Complianc=e and Risk Assessment</span>
              </div>
              <div className="flex items-center">
                <Code className="mr-2" />
                <span>Software Development: Front end and Back end web development</span>
              </div>
              <div className="flex items-center">
                <Terminal className="mr-2" />
                <span> VPS, Web and Dedicated Server Hardening service & Hositings</span>
              </div>
            </div>
          }
        />
      </div>

      <div className="mt-8">
        <Command 
          command="cat about_us.txt" 
          output="Alinuxa LLC is a cutting-edge cybersecurity MSP providing Software Development And Server Hosting VPS and Web, dedicated to protecting your digital assets. Our innovative methods combines advanced threat intelligence with innovative software development to deliver comprehensive security solutions."
        />
      </div>

      <div className="mt-8">
        <Command 
          command="./contact_us.sh" 
          output={
            <div>
              <p>Email: alinuxa@alinuxa.com</p>
              <p>Phone: +1 877-822-8756</p>
              <p>NOTE: THIS WEBSITE IS STILL UNDER WORK</p>
            </div>
          }
        />
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black p-4">
        <nav className="mb-8">
          <ul className="flex space-x-4 text-green-500">
            <li><Link to="/" className="hover:text-green-400">Home</Link></li>
            <li><Link to="/services" className="hover:text-green-400">Services</Link></li>
            <li><Link to="/contact" className="hover:text-green-400">Contact</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<HomeContent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
